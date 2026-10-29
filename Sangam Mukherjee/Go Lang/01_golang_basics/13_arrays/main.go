package main

import "fmt"

func main() {
	// fixed and can not grow -> vvi
	var marks [3]int

	marks[0] = 10
	marks[1] = 40
	marks[2] = 70

	fmt.Println(marks)

	fruits:= [5]string{"Mango", "Apple", "Orange", "Banana", "Cherry"}

	fmt.Println(fruits)
}
