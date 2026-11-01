package main

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

type UserResponse struct {
	Name string `json:"name"`
	Age int `json:age`
	City string `json:city`
}

func main() {
	url := "http://localhost:5000"

	res, err := http.Get(url)

	if err != nil {
		fmt.Println(err)
		return
	}

	defer res.Body.Close()

	bodyBytes, err := io.ReadAll(res.Body)
	if err != nil {
		fmt.Println(err)
		return
	}

	var data UserResponse

	if err := json.Unmarshal(bodyBytes, &data); err != nil{
		fmt.Println("json unmarshal failed")
		return
	}

	fmt.Println(data)

}
