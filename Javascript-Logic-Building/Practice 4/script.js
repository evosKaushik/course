// Problem Statement - 1

function factorialNumber(num) {
    if (num < 0) {
        throw new Error(`num should be greater than or equal to 0`);
    }
    // if (typeof(num) !== Number) {
    //     throw new Error("Enter a Valid Number");
        
    // }
  let result = 1;
  for (let i = 1; i <= num; i++) {
    console.log(i);
    result *= i;
  }
  return result;
}
console.log(factorialNumber(3));
