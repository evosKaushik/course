package main

import (
	"fmt"
	"math"
)

const inflationRate float64 = 2.5

func main() {
	var investmentAmount float64
	var years float64
	var expectedReturnRate float64

	outputText("Enter investment Amount: ")
	fmt.Scan(&investmentAmount)
	outputText("Enter Expected Return Rate: ")
	fmt.Scan(&expectedReturnRate)
	outputText("Enter Years in %: ")
	fmt.Scan(&years)

	futureValue, futureRealValue := calculateFutureValue(investmentAmount, expectedReturnRate, years)

	// futureValue := investmentAmount * math.Pow(1+expectedReturnRate/100, years)
	// futureRealValue := futureValue / math.Pow(1+inflationRate/100, years)

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

func outputText(text string) {
	fmt.Print(text)
}

func calculateFutureValue(investmentAmount, expectedReturnRate, years float64) (fv float64, rfv float64) {
	fv = investmentAmount * math.Pow(1+expectedReturnRate/100, years)
	rfv = fv / math.Pow(1+inflationRate/100, years)
	return 
}
