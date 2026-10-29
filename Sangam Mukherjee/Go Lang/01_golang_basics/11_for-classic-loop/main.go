package main 

import "fmt"

func main(){
	const tableOf = 7
	fmt.Println("Table of ", tableOf)
	for i := 1; i <= 10; i++ {
		fmt.Println(tableOf, "x", i, " = ", i * tableOf)
	}
}