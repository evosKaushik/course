package main

import (
	"fmt"
	"os"
	"strconv"
)

func main() {
	accountBalance := getBalanceFormFile()

	fmt.Println("Welcome to Go Bank!")

	// Loop
	for {
		fmt.Println("What do you want to do?")
		fmt.Println("1. Check balance")
		fmt.Println("2. Deposit Money")
		fmt.Println("3. Withdraw money")
		fmt.Println("4. Exit")

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
			writeBalanceToFile(accountBalance)
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
			writeBalanceToFile(accountBalance)
		default:
			fmt.Println("Good Bye :)")
			return
		}

	}

}

const accountBalanceFile = "balance.txt"

func writeBalanceToFile(balance float64) {
	balanceText := fmt.Sprint(balance)
	os.WriteFile(accountBalanceFile, []byte(balanceText), 0644)
}

func getBalanceFormFile() (balance float64) {
	data, _ := os.ReadFile(accountBalanceFile)
	balanceText := string(data)
	balance, _ = strconv.ParseFloat(balanceText, 64)
	return balance
}
