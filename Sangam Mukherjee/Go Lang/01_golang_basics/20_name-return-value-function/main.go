package main

import "fmt"

func divide(a int, b int) (x int) {
	x = a / b
	return
}

func main() {
	fmt.Println(divide(8, 2))
}
