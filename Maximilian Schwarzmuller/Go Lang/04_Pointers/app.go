package main

import "fmt"

func main() {
	age := 32

	agePointer := &age

	// adultYears := getAdultYears(&age)
	// fmt.Println("Age: ", adultYears)
	// fmt.Println("Age Pointer: ", *agePointer)
	fmt.Println("Adult Years: ", age)
	getAdultYears(agePointer)
	fmt.Println("Adult Years: ", age)
}

func getAdultYears(age *int) {
	// return *age - 18
	*age = *age - 18
}
