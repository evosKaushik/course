package main

import (
	"fmt"
)

func main(){
	
	var city string;
	city = "London"

	// Inferred to string
	var channel = "kaushik"

	fmt.Println(city, "<==>", channel)

	awmDamage, ak47Damage, kalaFirstDamage := 150, 35, 100

	fmt.Println(awmDamage, ak47Damage, kalaFirstDamage)
}