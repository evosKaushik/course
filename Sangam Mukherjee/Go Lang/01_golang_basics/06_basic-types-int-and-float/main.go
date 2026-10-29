package main

import (
	"fmt"
)

func main(){
	views1, views2 := 1000, 2000

	totalViews:= views1 + views2

	fmt.Println(totalViews)
	
	fmt.Println("Average Views: ", totalViews/2)
	
	rating1, rating2 := 4.5, 5.1
	
	avgRating:= (rating1 + rating2) / 2
	
	fmt.Println(avgRating)
}