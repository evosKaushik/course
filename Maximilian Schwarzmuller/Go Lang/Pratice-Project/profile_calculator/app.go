package main

import "fmt"

func main() {
	revenue := prompt("Revenue: ")
	expenses := prompt("Expenses: ")
	taxRate := prompt("Tax Rate: ")

	ebt, profit, ratio := calculateFinancial(revenue, expenses, taxRate)

	fmt.Println(ebt)
	fmt.Println(profit)
	fmt.Println(ratio)
}

func prompt(text string) (takenValue float64) {
	fmt.Print(text)
	fmt.Scan(&takenValue)
	return takenValue
}

func calculateFinancial(revenue, expenses, taxRate float64) (ebt, profit, ratio float64) {
	ebt = revenue - expenses
	profit = ebt * (1 - taxRate/100)
	ratio = ebt / profit
	return ebt, profit, ratio
}
