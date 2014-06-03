// Package gongflow provides server support for ng-flow (https://github.com/flowjs/ng-flow)
package gongflow

import (
	"errors"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"path"
	"strconv"
	"time"
)

var (
	DefaultDirPermissions     os.FileMode = 0777
	DefaultFilePermissions    os.FileMode = 0777
	ErrNoTempDir                          = errors.New("gongflow: the temporary directory doesn't exist")
	ErrCantCreateDir                      = errors.New("gongflow: can't create a directory under the temp directory")
	ErrCantWriteFile                      = errors.New("gongflow: can't write to a file under the temp directory")
	ErrCantReadFile                       = errors.New("gongflow: can't read a file under the temp directory (or got back bad data)")
	ErrCantDelete                         = errors.New("gongflow: can't delete a file/directory under the temp directory")
	alreadyCheckedDirectory               = false
	lastCheckedDirectoryError error       = nil
)

// NgFlowData is all the data listed in the "How do I set it up with my server?" section of the ng-flow
// README.md https://github.com/flowjs/flow.js/blob/master/README.md
type NgFlowData struct {
	flowChunkNumber  int    // The index of the chunk in the current upload. First chunk is 1 (no base-0 counting here).
	flowTotalChunks  int    // The total number of chunks.
	flowChunkSize    int    // The general chunk size. Using this value and flowTotalSize you can calculate the total number of chunks. The "final chunk" can be anything less than 2x chunk size.
	flowTotalSize    int    // The total file size.
	flowIdentifier   string // A unique identifier for the file contained in the request.
	flowFilename     string // The original file name (since a bug in Firefox results in the file name not being transmitted in chunk multipart posts).
	flowRelativePath string // The file's relative path when selecting a directory (defaults to file name in all browsers except Chrome)
}

// PartFlowData does exactly what it says on the tin, it extracts all the flow data from a request object and puts
// it into a nice little struct for you
func PartFlowData(r *http.Request) (NgFlowData, error) {
	var err error
	ngfd := NgFlowData{}
	ngfd.flowChunkNumber, err = strconv.Atoi(r.FormValue("flowChunkNumber"))
	if err != nil {
		return ngfd, errors.New("Bad flowChunkNumber")
	}
	ngfd.flowTotalChunks, err = strconv.Atoi(r.FormValue("flowTotalChunks"))
	if err != nil {
		return ngfd, errors.New("Bad flowTotalChunks")
	}
	ngfd.flowChunkSize, err = strconv.Atoi(r.FormValue("flowChunkSize"))
	if err != nil {
		return ngfd, errors.New("Bad flowChunkSize")
	}
	ngfd.flowTotalSize, err = strconv.Atoi(r.FormValue("flowTotalSize"))
	if err != nil {
		return ngfd, errors.New("Bad flowTotalSize")
	}
	ngfd.flowIdentifier = r.FormValue("flowIdentifier")
	if ngfd.flowIdentifier == "" {
		return ngfd, errors.New("Bad flowIdentifier")
	}
	ngfd.flowFilename = r.FormValue("flowFilename")
	if ngfd.flowFilename == "" {
		return ngfd, errors.New("Bad flowFilename")
	}
	ngfd.flowRelativePath = r.FormValue("flowRelativePath")
	if ngfd.flowRelativePath == "" {
		return ngfd, errors.New("Bad flowRelativePath")
	}
	return ngfd, nil
}

// PartUpload is used to handle a POST from ng-flow, it will return an empty string for part upload (incomplete) and when
// all the parts have been uploaded, it will return the path to the reconstituded file.  So, you can just keep calling it
// until you get back the path to a file.
func PartUpload(tempDir string, ngfd NgFlowData, r *http.Request) (string, error) {
	err := checkDirectory(tempDir)
	if err != nil {
		return "", err
	}
	fileDir, chunkFile := buildPathParts(tempDir, ngfd)
	_, code := storePart(fileDir, chunkFile, ngfd, r)
	if code == 200 && allPartsUploaded(tempDir, ngfd) {
		file, err := combineParts(tempDir, ngfd)
		if err != nil {
			return "", err
		}
		return file, nil
	}
	return "", nil
}

// PartStatus is used to handle a GET from ng-flow, it will return a (message, 200) for when it already has a part, and it
// will return a (message, 404 | 500) when a part is incomplete or not started.
func PartStatus(tempDir string, ngfd NgFlowData) (string, int) {
	err := checkDirectory(tempDir)
	if err != nil {
		return "Directory is broken: " + err.Error(), 500
	}
	_, chunkFile := buildPathParts(tempDir, ngfd)
	flowChunkNumberString := strconv.Itoa(ngfd.flowChunkNumber)
	dat, err := ioutil.ReadFile(chunkFile)
	if err != nil {
		return "The part " + ngfd.flowIdentifier + ":" + flowChunkNumberString + " isn't started yet!", 404
	}
	// An exception for large last chunks, according to ng-flow the last chunk can be anywhere less
	// than 2x the chunk size unless you haave forceChunkSize on... seems like idiocy to me, but alright.
	if ngfd.flowChunkNumber != ngfd.flowTotalChunks && ngfd.flowChunkSize != len(dat) {
		return "The part " + ngfd.flowIdentifier + ":" + flowChunkNumberString + " is the wrong size!", 500
	}

	return "The part " + ngfd.flowIdentifier + ":" + flowChunkNumberString + " looks great!", 200
}

// PartsCleanup is used to go through the tempDir and remove any parts and directories older than
// than the timeoutDur
func PartsCleanup(tempDir string, timeoutDur time.Duration) error {
	files, err := ioutil.ReadDir(tempDir)
	if err != nil {
		return err
	}
	for _, f := range files {
		fl := path.Join(tempDir, f.Name())
		finfo, err := os.Stat(fl)
		if err != nil {
			return err
		}

		log.Println(f.Name())
		log.Println(time.Now().Sub(finfo.ModTime()))
	}
	return nil
}

// buildPathParts simply builds the paths to the ID of the upload, and to the specific Chunk
func buildPathParts(tempDir string, ngfd NgFlowData) (string, string) {
	filePath := path.Join(tempDir, ngfd.flowIdentifier)
	chunkFile := path.Join(filePath, strconv.Itoa(ngfd.flowChunkNumber))
	return filePath, chunkFile
}

// combineParts will take the chunks uploaded, and combined them into a single file with the
// name as uploaded from the NgFlowData, and it will clean up the parts as it goes.
func combineParts(tempDir string, ngfd NgFlowData) (string, error) {
	fileDir, _ := buildPathParts(tempDir, ngfd)
	combinedName := path.Join(fileDir, ngfd.flowFilename)
	cn, err := os.Create(combinedName)
	if err != nil {
		return "", err
	}
	defer cn.Close()

	files, err := ioutil.ReadDir(tempDir)
	if err != nil {
		return "", err
	}
	for _, f := range files {
		fl := path.Join(tempDir, f.Name())
		dat, err := ioutil.ReadFile(fl)
		if err != nil {
			return "", err
		}
		_, err = cn.Write(dat)
		if err != nil {
			return "", err
		}
		if fl != combinedName {
			err = os.Remove(fl)
			if err != nil {
				return "", err
			}
		}
	}
	return combinedName, nil
}

// allPartsUploaded checks if the file is completely uploaded (based on total size)
func allPartsUploaded(tempDir string, ngfd NgFlowData) bool {
	partsPath := path.Join(tempDir, ngfd.flowIdentifier)
	files, err := ioutil.ReadDir(partsPath)
	if err != nil {
		log.Println(err)
	}
	totalSize := int64(0)
	for _, f := range files {
		fi, err := os.Stat(path.Join(partsPath, f.Name()))
		if err != nil {
			log.Println(err)
		}
		totalSize += fi.Size()
	}
	if totalSize == int64(ngfd.flowTotalSize) {
		return true
	}
	return false
}

// storePart puts the part in the request into the right place on disk
func storePart(tempDir string, tempFile string, ngfd NgFlowData, r *http.Request) (string, int) {
	err := os.MkdirAll(tempDir, DefaultDirPermissions)
	if err != nil {
		return "Bad directory", 500
	}
	file, _, err := r.FormFile("file")
	if err != nil {
		return "Can't access file field", 500
	}
	data, err := ioutil.ReadAll(file)
	if err != nil {
		return "Can't read file field", 500
	}
	err = ioutil.WriteFile(tempFile, data, DefaultDirPermissions)
	if err != nil {
		return "Can't write file", 500
	}
	return "Good Part", 200
}

// checkDirectory makes sure that we have all the needed permissions to the temp directory to
// read/write/delete.  Expensive operation, so it only does it once.
func checkDirectory(d string) error {
	if alreadyCheckedDirectory {
		return lastCheckedDirectoryError
	}

	alreadyCheckedDirectory = true

	if !directoryExists(d) {
		lastCheckedDirectoryError = ErrNoTempDir
		return lastCheckedDirectoryError
	}

	testName := "5d58061677944334bb616ba19cec5cc4"
	testPart := "42"
	contentName := "foobie"
	testContent := `For instance, on the planet Earth, man had always assumed that he was more intelligent than 
	dolphins because he had achieved so much—the wheel, New York, wars and so on—whilst all the dolphins had 
	ever done was muck about in the water having a good time. But conversely, the dolphins had always believed 
	that they were far more intelligent than man—for precisely the same reasons.`

	p := path.Join(d, testName, testPart)
	err := os.MkdirAll(p, DefaultDirPermissions)
	if err != nil {
		lastCheckedDirectoryError = ErrCantCreateDir
		return lastCheckedDirectoryError
	}

	f := path.Join(p, contentName)
	err = ioutil.WriteFile(f, []byte(testContent), DefaultFilePermissions)
	if err != nil {
		lastCheckedDirectoryError = ErrCantWriteFile
		return lastCheckedDirectoryError
	}

	b, err := ioutil.ReadFile(f)
	if err != nil {
		lastCheckedDirectoryError = ErrCantReadFile
		return lastCheckedDirectoryError
	}
	if string(b) != testContent {
		lastCheckedDirectoryError = ErrCantReadFile // TODO: This should probably be a different error
		return lastCheckedDirectoryError
	}

	err = os.RemoveAll(path.Join(d, testName))
	if err != nil {
		lastCheckedDirectoryError = ErrCantDelete
		return lastCheckedDirectoryError
	}

	if os.TempDir() == d {
		log.Println("You should really have a directory just for upload temp (different from system temp).  It is OK, but consider making a subdirectory for it.")
	}

	return nil
}

// directoryExists checks if the directory exists of course!
func directoryExists(d string) bool {
	finfo, err := os.Stat(d)
	if err == nil && finfo.IsDir() {
		return true
	}
	return false
}
