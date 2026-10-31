package main

import (
	"fmt"
	"net/http"
)

func rootHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Only GET is allowed", http.StatusMethodNotAllowed)
		return
	}

	w.Write([]byte("Hello from GO net/http server"))
}

func helloHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Only GET is allowed", http.StatusMethodNotAllowed)
		return
	}

	w.Write([]byte("Hello from GO net/http server"))
}

func main(){

	http.HandleFunc("/", rootHandler)
	http.HandleFunc("/hello", helloHandler)


	err := http.ListenAndServe(":5000",  nil)
	fmt.Println(err)
}