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
	ErrNoTempDir     = errors.New("gongflow: the temporary directory doesn't exist")
	ErrCantCreateDir = errors.New("gongflow: can't create a directory under the temp directory")
	ErrCantWriteFile = errors.New("gongflow: can't write to a file under the temp directory")
	ErrCantReadFile  = errors.New("gongflow: can't read a file under the temp directory (or got back bad data)")
	ErrCantDelete    = errors.New("gongflow: can't delete a file/directory under the temp directory")
)

type flowData struct {
	flowChunkNumber  int    // The index of the chunk in the current upload. First chunk is 1 (no base-0 counting here).
	flowTotalChunks  int    // The total number of chunks.
	flowChunkSize    int    // The general chunk size. Using this value and flowTotalSize you can calculate the total number of chunks. Please note that the size of the data received in the HTTP might be lower than flowChunkSize of this for the last chunk for a file.
	flowTotalSize    int    // The total file size.
	flowIdentifier   string // A unique identifier for the file contained in the request.
	flowFilename     string // The original file name (since a bug in Firefox results in the file name not being transmitted in chunk multipart posts).
	flowRelativePath string // The file's relative path when selecting a directory (defaults to file name in all browsers except Chrome)
	methodType       string // The method, for our purposes, we just care about GET or POST
}

// UploadHandler returns a function built to drop in at to a http.HandleFunc("...", GOES HERE), it closes over
// some configuration data required to make it work.
func UploadHandler(tempDirectory string, timeoutMinutes int) (func(http.ResponseWriter, *http.Request), error) {
	err := checkDirectory(tempDirectory)
	if err != nil {
		return nil, err
	}
	if timeoutMinutes != 0 {
		go cleanupTemp(timeoutMinutes)
	}

	return func(w http.ResponseWriter, r *http.Request) {
		fd, err := getFlowData(r)
		if err != nil {
			http.Error(w, err.Error(), 500)
		}

		tempDir := path.Join(tempDirectory, fd.flowIdentifier)
		tempFile := path.Join(tempDir, strconv.Itoa(fd.flowChunkNumber))

		if fd.methodType == "GET" {
			msg, code := statusCheck(tempFile, fd)
			http.Error(w, msg, code)
		} else if fd.methodType == "POST" { // upload
			msg, code := handlePartUpload(tempDir, tempFile, fd, r)
			http.Error(w, msg, code)
			if isDone(tempDir, fd) {
				combineParts(tempDir, fd)
			}
		} else {
			http.Error(w, "Hmph, no clue how we got here", 500)
		}
	}, nil
}

func combineParts(tempDir string, fd flowData) {
	combinedName := path.Join(tempDir, fd.flowFilename)
	cn, err := os.OpenFile(combinedName, os.O_RDWR|os.O_APPEND, 0660)
	if err != nil {
		log.Println(err)
		return
	}
	defer cn.Close()

	files, err := ioutil.ReadDir(tempDir)
	if err != nil {
		log.Println(err)
		return
	}
	for _, f := range files {
		fl := path.Join(tempDir, f.Name())
		log.Println(fl)
		dat, err := ioutil.ReadFile(fl)
		if err != nil {
			log.Println(err)
			return
		}
		cn.Write(dat)
	}
}

func isDone(tempDir string, fd flowData) bool {
	files, err := ioutil.ReadDir(tempDir)
	if err != nil {
		log.Println(err)
	}
	totalSize := int64(0)
	for _, f := range files {
		log.Println(f)
		fi, err := os.Stat(path.Join(tempDir, f.Name()))
		if err != nil {
			log.Println(err)
		}
		log.Println(fi)
		totalSize += fi.Size()
	}
	if totalSize == int64(fd.flowTotalSize) {
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

func statusCheck(tempFile string, fd flowData) (string, int) {
	flowChunkNumberString := strconv.Itoa(fd.flowChunkNumber)
	_, err := ioutil.ReadFile(tempFile)
	if err != nil {
		return "The part " + fd.flowIdentifier + ":" + flowChunkNumberString + " isn't started yet!", 404
	}

	return "The part " + fd.flowIdentifier + ":" + flowChunkNumberString + " looks great!", 200
}

func getFlowData(r *http.Request) (flowData, error) {
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
	fd.methodType = r.Method
	if fd.methodType != "POST" && fd.methodType != "GET" {
		return fd, errors.New("Bad method type")
	}
	return fd, nil
}

func checkDirectory(d string) error {
	if !directoryExists(d) {
		return ErrNoTempDir
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
		return ErrCantCreateDir
	}

	f := path.Join(p, contentName)
	err = ioutil.WriteFile(f, []byte(testContent), 0777)
	if err != nil {
		return ErrCantWriteFile
	}

	b, err := ioutil.ReadFile(f)
	if err != nil {
		return ErrCantReadFile
	}
	if string(b) != testContent {
		return ErrCantReadFile // TODO: This should probably be a different error
	}

	err = os.RemoveAll(p)
	if err != nil {
		return ErrCantDelete
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

func cleanupTemp(timeoutMinutes int) {
	t := time.NewTicker(time.Duration(timeoutMinutes) * time.Minute)
	for _ = range t.C {
		log.Println("Doing cleanup")
	}
}
