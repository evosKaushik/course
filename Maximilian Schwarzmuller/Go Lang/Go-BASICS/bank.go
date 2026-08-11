package main

import "fmt"

func main() {
	accountBalance := 1000.00

	fmt.Println("Welcome to Go Bank!")
	fmt.Println("What do you want to do?")
	fmt.Println("1. Check balance")
	fmt.Println("2. Deposit Money")
	fmt.Println("3. Withdraw money")
	fmt.Println("4. Exit")

	// User input
	var choice int

	fmt.Print("Your choice: ")
	fmt.Scan(&choice)

	if choice == 1 {
		fmt.Println("Your Balance is", accountBalance)
	} else if choice == 2 {
		fmt.Print("Your Deposit: ")
		depositAmount := 0.0
		fmt.Scan(&depositAmount)
		accountBalance += depositAmount
		fmt.Println("Balance updated! New amount: ", accountBalance)
	} else if choice == 3 {
		fmt.Print("Your Withdraw: ")
		withdrawAmount := 0.0
		fmt.Scan(&withdrawAmount)
		accountBalance -= withdrawAmount
		fmt.Println("Balance updated! New amount: ", accountBalance)
	}

	fmt.Println("Your choice:", choice)
}
