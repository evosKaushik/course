package main

import (
	"errors"
	"fmt"
)

func main() {

	// defer res.body.close()
	fmt.Println("Case 1: success")
	if err := doWork(true); err != nil {
		fmt.Println("error:", err)
	} 
	
	fmt.Println("Case 2: Fail early")
	if err := doWork(false); err != nil {
		fmt.Println("error:", err)
	} 
}

func doWork(success bool) error {
	// resource related
	// start message -> resource acquired
	// cleanup message -> resource released

	fmt.Println("start: resource acquired")

	//  defer will guranntee this runs at the end of this func
	defer fmt.Println("cleanup: resource released")

	if !success {
		return errors.New("somethings went wrong. i am returning early")
	}

	fmt.Println("work: doing somethings imp")
	fmt.Println("work: this work is done")

	return nil
}
