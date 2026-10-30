package main

import "fmt"

func main() {
	ages := map[string]int{
		"kaushik": 24,
		"john":    42,
	}

	fmt.Println(ages)
	fmt.Println(ages["kaushik"])
	fmt.Println(ages["kaushik"])
	
	delete(ages, "kaushik")
	fmt.Println(ages)
}
