package main

import "fmt"

func main() {
	// Common Collection type
	// It is dynamic and can grow

	results := []string{"success", "pending", "fail"}

	fmt.Println((results))
	fmt.Println(len(results))

	var fruits []string

	fruits = append(fruits, "Mango")
	fruits = append(fruits, "Banana")
	fruits = append(fruits, "Apple")

	fmt.Println(fruits)

}
