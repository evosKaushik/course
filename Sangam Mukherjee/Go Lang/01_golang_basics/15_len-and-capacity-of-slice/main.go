package main

import "fmt"

func main() {
	//  make([] , len, cap)
	scores := make([]int, 0, 5)

	fmt.Println(scores, len(scores), cap(scores))

	scores = append(scores, 100)
	fmt.Println("After appending 100", scores)

	scores = append(scores, 200, 3_000)
	fmt.Println("After appending 200 and 3,000", scores)

	scores = append(scores, 45, 55)
	fmt.Println("After appending 45 and 55", scores)

	scores = append(scores, 60)
	fmt.Println("After appending 60", scores, len(scores), cap(scores))

	todos := []string{"do youtube", "workout everyday"}

	more := []string{"learning golang"}

	todos = append(todos, more...)
}
