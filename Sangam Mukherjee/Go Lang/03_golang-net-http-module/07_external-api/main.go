package main

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

type UserDetailsResponse struct {
	Name string `json:"name"`
	Age  int    `json:"age"`
	City string `json:"city"`
}

func writeJSON(w http.ResponseWriter, status int, data any) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)

	json.NewEncoder(w).Encode(data)
}

func fetchUserDetails() (UserDetailsResponse, error) {
	url := "http://localhost:5000"

	res, err := http.Get(url)
	if err != nil {
		return UserDetailsResponse{}, err
	}

	defer res.Body.Close()

	if res.StatusCode != http.StatusOK {
		return UserDetailsResponse{}, fmt.Errorf("External API failed: %s", res.Status)
	}

	bodyBytes, err := io.ReadAll(res.Body)
	if err != nil {
		return UserDetailsResponse{}, err
	}

	var data UserDetailsResponse

	if err := json.Unmarshal(bodyBytes, &data); err != nil {
		return UserDetailsResponse{}, err

	}

	return data, nil
}

func externalHandler(w http.ResponseWriter, r *http.Request) {

	if r.Method != http.MethodGet {
		writeJSON(w, http.StatusMethodNotAllowed, map[string]any{
			"ok":    false,
			"error": "Only Get Method is allowed",
		})
		return
	}

	userData, err := fetchUserDetails()
	if err != nil {
		writeJSON(w, http.StatusMethodNotAllowed, map[string]any{
			"ok":    false,
			"error": "Failed to fetch data",
		})
		return
	}

	writeJSON(w, http.StatusOK, userData)

}

func main() {

	http.HandleFunc("/external", externalHandler)

	err := http.ListenAndServe(":3000", nil)
	if err != nil {
		fmt.Println(err)
	}
}
