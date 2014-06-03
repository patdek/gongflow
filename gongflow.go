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
	ErrNoTempDir                    = errors.New("gongflow: the temporary directory doesn't exist")
	ErrCantCreateDir                = errors.New("gongflow: can't create a directory under the temp directory")
	ErrCantWriteFile                = errors.New("gongflow: can't write to a file under the temp directory")
	ErrCantReadFile                 = errors.New("gongflow: can't read a file under the temp directory (or got back bad data)")
	ErrCantDelete                   = errors.New("gongflow: can't delete a file/directory under the temp directory")
	alreadyCheckedDirectory         = false
	lastCheckedDirectoryError error = nil
)

type flowData struct {
	flowChunkNumber  int    // The index of the chunk in the current upload. First chunk is 1 (no base-0 counting here).
	flowTotalChunks  int    // The total number of chunks.
	flowChunkSize    int    // The general chunk size. Using this value and flowTotalSize you can calculate the total number of chunks. The "final chunk" can be anything less than 2x chunk size.
	flowTotalSize    int    // The total file size.
	flowIdentifier   string // A unique identifier for the file contained in the request.
	flowFilename     string // The original file name (since a bug in Firefox results in the file name not being transmitted in chunk multipart posts).
	flowRelativePath string // The file's relative path when selecting a directory (defaults to file name in all browsers except Chrome)
}

// UploadPart is used to handle a POST from ng-flow, it will return an empty string for part upload (incomplete) and when
// all the parts have been uploaded, it will return the path to the reconstituded file.  So, you can just keep calling it
// until you get back the path to a file.
func UploadPart(tempDirectory string, fd flowData, r *http.Request) (string, error) {
	err := checkDirectory(tempDirectory)
	if err != nil {
		return "", err
	}
	id, chunk := buildPathParts(tempDirectory, fd)
	msg, code := handlePartUpload(id, chunk, fd, r)
	log.Println(msg, " ugh ", code)
	if code == 200 && isDone(tempDirectory, fd) {
		file, err := combineParts(tempDirectory, fd)
		if err != nil {
			return "", err
		}
		return file, nil
	}
	return "", nil
}

// CheckPart is used to handle a GET from ng-flow, it will return a (message, 200) for when it already has a part, and it
// will return a (message, 404 | 500) when a part is incomplete or not started.
func CheckPart(tempDirectory string, fd flowData) (string, int) {
	err := checkDirectory(tempDirectory)
	if err != nil {
		return "Directory is broken: " + err.Error(), 500
	}
	_, chunk := buildPathParts(tempDirectory, fd)
	flowChunkNumberString := strconv.Itoa(fd.flowChunkNumber)
	dat, err := ioutil.ReadFile(chunk)
	if err != nil {
		return "The part " + fd.flowIdentifier + ":" + flowChunkNumberString + " isn't started yet!", 404
	}
	// An exception for large last chunks, according to ng-flow the last chunk can be anywhere less
	// than 2x the chunk size unless you haave forceChunkSize on... seems like idiocy to me, but alright.
	if fd.flowChunkNumber != fd.flowTotalChunks && fd.flowChunkSize != len(dat) {
		return "The part " + fd.flowIdentifier + ":" + flowChunkNumberString + " is the wrong size!", 404
	}

	return "The part " + fd.flowIdentifier + ":" + flowChunkNumberString + " looks great!", 200
}

// CleanupParts is used to go through the tempDirectory and remove any parts and directories older than
// the time.Duration passed
func CleanupParts(tempDirectory string, timeoutDur time.Duration) error {
	files, err := ioutil.ReadDir(tempDirectory)
	if err != nil {
		return err
	}
	for _, f := range files {
		fl := path.Join(tempDirectory, f.Name())
		finfo, err := os.Stat(fl)
		if err != nil {
			return err
		}

		log.Println(time.Now().Sub(finfo.ModTime()))
	}
	return nil
}

func buildPathParts(tempDirectory string, fd flowData) (string, string) {
	id := path.Join(tempDirectory, fd.flowIdentifier)
	chunk := path.Join(id, strconv.Itoa(fd.flowChunkNumber))
	return id, chunk
}

func combineParts(tempDir string, fd flowData) (string, error) {
	combinedName := path.Join(tempDir, fd.flowFilename)
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
			os.Remove(fl)
		}
	}
	return combinedName, nil
}

func isDone(tempDir string, fd flowData) bool {
	files, err := ioutil.ReadDir(path.Join(tempDir, fd.flowIdentifier))
	if err != nil {
		log.Println(err)
	}
	totalSize := int64(0)
	for _, f := range files {
		fi, err := os.Stat(path.Join(tempDir, f.Name()))
		log.Println(fi.Name())
		if err != nil {
			log.Println(err)
		}
		totalSize += fi.Size()
	}
	log.Println(totalSize, ">=", fd.flowTotalSize)
	if totalSize >= int64(fd.flowTotalSize) {
		return true
	}
	return false
}

func handlePartUpload(tempDir string, tempFile string, fd flowData, r *http.Request) (string, int) {
	err := os.MkdirAll(tempDir, 0777)
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
	err = ioutil.WriteFile(tempFile, data, 0777)
	if err != nil {
		return "Can't write file", 500
	}
	return "Good Part", 200
}

func ExtractFlowData(r *http.Request) (flowData, error) {
	var err error
	fd := flowData{}
	fd.flowChunkNumber, err = strconv.Atoi(r.FormValue("flowChunkNumber"))
	if err != nil {
		return fd, errors.New("Bad flowChunkNumber")
	}
	fd.flowTotalChunks, err = strconv.Atoi(r.FormValue("flowTotalChunks"))
	if err != nil {
		return fd, errors.New("Bad flowTotalChunks")
	}
	fd.flowChunkSize, err = strconv.Atoi(r.FormValue("flowChunkSize"))
	if err != nil {
		return fd, errors.New("Bad flowChunkSize")
	}
	fd.flowTotalSize, err = strconv.Atoi(r.FormValue("flowTotalSize"))
	if err != nil {
		return fd, errors.New("Bad flowTotalSize")
	}
	fd.flowIdentifier = r.FormValue("flowIdentifier")
	if fd.flowIdentifier == "" {
		return fd, errors.New("Bad flowIdentifier")
	}
	fd.flowFilename = r.FormValue("flowFilename")
	if fd.flowFilename == "" {
		return fd, errors.New("Bad flowFilename")
	}
	fd.flowRelativePath = r.FormValue("flowRelativePath")
	if fd.flowRelativePath == "" {
		return fd, errors.New("Bad flowRelativePath")
	}
	return fd, nil
}

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
	err := os.MkdirAll(p, 0777)
	if err != nil {
		lastCheckedDirectoryError = ErrCantCreateDir
		return lastCheckedDirectoryError
	}

	f := path.Join(p, contentName)
	err = ioutil.WriteFile(f, []byte(testContent), 0777)
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

func directoryExists(d string) bool {
	finfo, err := os.Stat(d)
	if err == nil && finfo.IsDir() {
		return true
	}
	return false
}
