function getMultiplicationTable(tableOfNum, TableTillNum) {
    if (tableOfNum < 1 && TableTillNum < 1) {
        throw new Error(`${tableOfNum} and ${TableTillNum} is smaller than 1 must be greater`);
    }
    for (let i = 1; i <= TableTillNum ; i++) {
        console.log(`${tableOfNum} X ${i} = ${tableOfNum * i}`)        
    }
}

getMultiplicationTable(4, 20)