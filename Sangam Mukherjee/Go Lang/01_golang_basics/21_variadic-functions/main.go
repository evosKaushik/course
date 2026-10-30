package main

import "fmt"

func sumAll(nums ...int) int {
	total := 0

	for _, n := range nums {
		total += n
	}

	return total
}

func main() {
	fmt.Println(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

	values := []int{5, 30, 15}

	fmt.Println(sumAll(values...))

	res := func(n int) int {
		return n * 2
	}

	fmt.Println(res(2))

	res1 := func(a int, b int) int {
		return a + b
	}(5, 10)
	fmt.Println(res1)
}
