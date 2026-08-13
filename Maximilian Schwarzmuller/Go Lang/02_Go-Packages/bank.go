package main

import (
	"fmt"

	"example.com/bank/fileops"
	"github.com/Pallinder/go-randomdata"
)

const accountBalanceFileName = "balance.txt"

func main() {
	accountBalance, error := fileops.GetFloatFromFile(accountBalanceFileName)

	if error != nil {
		fmt.Println("Error")
		fmt.Println(error)
		fmt.Println("------------------------")
		// panic("Failed to get balance from file. Please check the file and try again.")
	}

	fmt.Println("Welcome to Go Bank!")
	fmt.Println("Reach us 24/7", randomdata.PhoneNumber())

	// Loop
	for {
		presentsOptions()
		// User input
		var choice int

		fmt.Print("Your choice: ")
		fmt.Scan(&choice)

		switch choice {
		case 1:
			fmt.Println("Your Balance is", accountBalance)
		case 2:
			fmt.Print("Your Deposit: ")
			depositAmount := 0.0
			fmt.Scan(&depositAmount)

			if depositAmount <= 0 {
				fmt.Println("Invalid amount. Must be greater than 0.")
				continue
			}

			accountBalance += depositAmount
			fmt.Println("Balance updated! New amount: ", accountBalance)
			fileops.WriteFloatToFile(accountBalance, accountBalanceFileName)
		case 3:
			fmt.Print("Your Withdraw: ")
			withdrawAmount := 0.0
			fmt.Scan(&withdrawAmount)
			if withdrawAmount <= 0 {
				fmt.Println("Invalid amount. Must be greater than 0.")
				continue
			}
			if withdrawAmount > accountBalance {
				fmt.Println("Invalid amount. You can't withdraw more than you have")
				continue
			}
			accountBalance -= withdrawAmount
			fmt.Println("Balance updated! New amount: ", accountBalance)
			fileops.WriteFloatToFile(accountBalance, accountBalanceFileName)

		default:
			if choice <= 0 || choice > 4 {
				fmt.Println("Invalid choice. Please try again.")
				continue
			}
			fmt.Println("Good Bye :)")
			return
		}
	}

}
