const digitsList1 = [2, 4, 6, 5];
const digitsList2 = [7, 3, 2];

const num1 = 2 * 1 + 4 * 10 + 6 * 100 + 5 * 1000;
const num2 = 7 * 1 + 3 * 10 + 2 * 100;

function digitsToNumber(digits) {
  if (!digits?.length) return;
  let num = 0;
  for (let i = 0; i < digits.length; i++) {
    num += digits[i] * 10 ** i;
  }
  return num;
}

console.log(digitsToNumber(digitsList1));
