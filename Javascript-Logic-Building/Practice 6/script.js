


function addDigitsOfNumber(num) {
  let result = 0
  let modifyNum = String(num).split('')
  Number(modifyNum)
  modifyNum.forEach(num => result += Number(num))
  return result
}




console.log(addDigitsOfNumber(14))
console.log(addDigitsOfNumber(14))
console.log(addDigitsOfNumber(14))
console.log(addDigitsOfNumber(14))
console.log(addDigitsOfNumber(21243245321413))

