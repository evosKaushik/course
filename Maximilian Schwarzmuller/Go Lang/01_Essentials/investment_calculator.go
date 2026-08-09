package main

import (
	"fmt"
	"math"
)

func main() {

	const inflationRate float64 = 2.5
	var investmentAmount float64
	var years float64
	var expectedReturnRate float64

	fmt.Print("Enter investment Amount: ")
	fmt.Scan(&investmentAmount)
	fmt.Print("Enter Expected Return Rate: ")
	fmt.Scan(&expectedReturnRate)
	fmt.Print("Enter Years in %: ")
	fmt.Scan(&years)

	futureValue := (investmentAmount) * math.Pow(1+expectedReturnRate/100, (years))
	futureRealValue := futureValue / math.Pow(1+inflationRate/100, (years))

	formattedFv := fmt.Sprintf("Future Value: %.1f\n", futureValue)
	formattedRFV := fmt.Sprintf("Future Value (adjusted for inflation): %.1f\n", futureRealValue)

	// outputs information
	// fmt.Printf(`
	// Future Value: %.1f
	// Future Value (adjusted for inflation): %.1f
	// `, futureValue, futureRealValue)
	// output adjusted inflation
	// fmt.Println("Future Value (adjusted for inflation): ", futureRealValue)

	fmt.Print(formattedFv, formattedRFV)
}
