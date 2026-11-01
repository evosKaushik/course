package main

import (
	"fmt"
	"io"
	"net/http"
)

func main() {
	url := "http://localhost:5000"

	res, err := http.Get(url)
	if err != nil {
		fmt.Println(err)
		return
	}

	defer res.Body.Close()

	fmt.Println("Status Code", res.StatusCode)

	bodyBytes, err := io.ReadAll(res.Body)
	bodyText := string(bodyBytes)
	fmt.Println(bodyText)
}
