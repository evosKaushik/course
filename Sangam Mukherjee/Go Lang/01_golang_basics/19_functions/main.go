package main

import "fmt"

func add(a int, b int) int {
	return a + b
}

func sumAndProduct(a int, b int) (int, int) {
	sum := a + b
	product := a * b

	return sum, product
}

func main() {
	fmt.Println(add(1, 5))
	
	sum, product := sumAndProduct(1, 5)
	fmt.Println("Sum: ", sum, " | ", "Product: ", product)
}
