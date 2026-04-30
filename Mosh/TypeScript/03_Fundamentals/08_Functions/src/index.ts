function calculateTax(income: number, taxYear:number = 2022): number {
    return taxYear < 2022 ? income * 1.2 : income * 1.3
}

calculateTax(10_000, 2022)