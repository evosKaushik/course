package main

import "fmt"

type User struct {
	name string
	age  int
}

func (u User) Intro() string {
	return fmt.Sprintf("Hi, I am %s", u.name)
}

func main() {
	user := User{
		name: "Kaushik",
		age:  20,
	}

	fmt.Println(user.Intro())

}
