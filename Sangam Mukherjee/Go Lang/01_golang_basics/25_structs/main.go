package main

import "fmt"

// struct groups related fields into one type
type User struct {
	id    int
	name  string
	email string
	age   int
}

func main() {
	user1 := User{
		id:    1,
		name:  "Kaushik",
		email: "kaushik.lf07@gmail.com",
		age:   52,
	}
	fmt.Println(user1)

	user1.age = 12

	fmt.Println(user1)
}
