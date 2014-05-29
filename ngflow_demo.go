package main

import (
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/angular.js", func(w http.ResponseWriter, r *http.Request) { http.ServeFile(w, r, "./html/js/angular.js") })
	http.HandleFunc("/ng-flow-standalone.js", func(w http.ResponseWriter, r *http.Request) { http.ServeFile(w, r, "./html/js/ng-flow-standalone.js") })
	http.HandleFunc("/upload", func(w http.ResponseWriter, r *http.Request) { http.ServeFile(w, r, "./html/index.html") })
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) { http.ServeFile(w, r, "./html/index.html") })
	log.Fatal(http.ListenAndServe(":8080", nil))
}
