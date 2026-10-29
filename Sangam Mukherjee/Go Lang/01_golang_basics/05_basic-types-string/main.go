package main

import (
	"fmt"
	"strings"
)

func main(){
	firstName := "Kaushik";
	lastName := "Patel";
	fullName := firstName + " " + lastName

	fmt.Println(strings.ToUpper(fullName))
}