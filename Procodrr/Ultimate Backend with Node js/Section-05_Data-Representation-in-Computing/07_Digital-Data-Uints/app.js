const digitsList1 = [2, 4, 6, 5];
const digitsList2 = [7, 3, 2];

const num1 = 2 * 1 + 4 * 10 + 6 * 100 + 5 * 1000;
const num2 = 7 * 1 + 3 * 10 + 2 * 100;

const digitsToNumber = (digits, radix = 10) => {
  return digits.reduce((acc, curr, index) => {
    return acc + curr * Math.pow(radix, index);
  }, 0);
};

console.log(digitsToNumber(