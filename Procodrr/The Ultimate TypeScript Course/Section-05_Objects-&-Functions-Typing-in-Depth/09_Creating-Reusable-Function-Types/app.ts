type MathOperation = (a: number, b: number) => number;

const add: MathOperation = function (a, b) {
  return a + b;
};

const subtract: MathOperation = function (a, b) {
  return a - b;
};
const multiply: MathOperation = function (a, b) {
  return a * b;
};
const divide: MathOperation = function (a, b) {
  return a / b;
};

type Fruits = "Apple" | "Mango" | "Grapes";

function printFruits(fruit: Fruits) {
  console.log(fruit);
}


