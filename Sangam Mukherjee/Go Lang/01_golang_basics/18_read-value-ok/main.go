package main

import "fmt"

func main() {
	points := map[string]int{
		"a": 10,
		"b": 29,
		"c": 15,
	}

	fmt.Println("a", points["a"])
	fmt.Println("a", points["b"])
	fmt.Println("c", points["c"])

	valB, okB := points["b"]

	fmt.Println(valB, okB)

	if val, ok := points["d"]; ok {

		fmt.Println(val, ok)
		} else {
			
			fmt.Println("Value not found")
		}
}
