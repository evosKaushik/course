package main

import "fmt"

type User struct {
	name string
	age  int
}

func main() {
	user := User{
		name: "Kaushik",
		age:  20,
	}



	fmt.Println(user.age)

	user.Birthday()

	fmt.Println(user.age)

}

func (u *User) Birthday() {
	u.age++
}
