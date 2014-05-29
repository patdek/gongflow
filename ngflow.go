package ngflow

import (
	"errors"
	"log"
	"net/http"
	"os"
	"strconv"
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

func UploadHandler(tempDirectory string) (func(http.ResponseWriter, *http.Request), error) {
	if !directoryExists(tempDirectory) {
		return nil, errors.New("Invalid Directory")
	}

	return func(w http.ResponseWriter, r *http.Request) {
		var err error
		fd := flowData{}
		fd.flowChunkNumber, err = strconv.Atoi(r.FormValue("flowChunkNumber"))
		if err != nil {
			http.Error(w, "Bad flowChunkNumber", 500)
		}
		fd.flowTotalChunks, err = strconv.Atoi(r.FormValue("flowTotalChunks"))
		if err != nil {
			http.Error(w, "Bad flowTotalChunks", 500)
		}
		fd.flowChunkSize, err = strconv.Atoi(r.FormValue("flowChunkSize"))
		if err != nil {
			http.Error(w, "Bad flowChunkSize", 500)
		}
		fd.flowTotalSize, err = strconv.Atoi(r.FormValue("flowTotalSize"))
		if err != nil {
			http.Error(w, "Bad flowTotalSize", 500)
		}
		fd.flowIdentifier = r.FormValue("flowIdentifier")
		if fd.flowIdentifier == "" {
			http.Error(w, "Bad flowIdentifier", 500)
		}
		fd.flowFilename = r.FormValue("FlowFilename")
		if fd.flowFilename == "" {
			http.Error(w, "Bad flowFilename", 500)
		}
		fd.flowRelativePath = r.FormValue("FlowRelativePath")
		if fd.flowRelativePath == "" {
			http.Error(w, "Bad flowRelativePath", 500)
		}
		fd.methodType = r.Method
		if fd.methodType != "POST" && fd.methodType != "GET" {
			http.Error(w, "Bad method type", 500)
		}
		log.Println(fd.flowIdentifier)
	}, nil
}

func directoryExists(d string) bool {
	finfo, err := os.Stat(d)
	if err == nil && finfo.IsDir() {
		return true
	}
	return false
}
