// Problem Statement - 1

function fun(a) {
  if (a % 2 === 0) {
    return a + ",Is a Even";
  } else {
    return a + ",Is a Odd";
  }
}
function checkEvenorOdd(a) {
  return a % 2 === 0 ? "Even" : "Odd";
}

// Problem Statement - 2

function smallestNumberFinder(a, b, c) {
if (isNaN === a && isNaN === b && isNaN === c) {
      if (a < b && a < c) {
    return `${a} is the smallest among ${b} and ${c}`;
  } else if (b < c && b < a) {
    return `${b} is the smallest among ${a} and ${c}`;
  } else if (c < a && c < b) {
    return `${c} is the smallest among ${a} and ${b}`;
  }else{
      return "two or more number are equal";
    }
} else {
    return 'Enter Valid Number'
}

}

console.log(smallestNumberFinder(1, 123, 123));
console.log(smallestNumberFinder(0, 0, 0));
console.log(smallestNumberFinder(1, 0, 0));
// console.log(smallestNumberFinder(1, 0 ));
