package main

import (
	"fmt"
)

func main(){
	isLogged:= true; // inferred as boolean
	isAdmin := false;
	hasSubscription:= true

	canOpenDashboard := isLogged && isAdmin

	canDeletePost := isAdmin || (isLogged && hasSubscription)

	
	fmt.Println("Can Delete Post :",canDeletePost)

	fmt.Println("Can Open Dashboard :",canOpenDashboard)
}