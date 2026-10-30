package main

import "fmt"

func main() {

	score := 10
	fmt.Println("Before:", score)

	addScore(&score)

	fmt.Println("After:", score)
}

func addScore(score *int) {
	*score += 5
}
