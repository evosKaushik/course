//! Question - 1
function maxOfThree(a, b, c) {
  if (a >= b && a >= c) {
    console.log(a);
  } else if (b >= c && b >= a) {
    console.log(b);
  } else if (c >= b && c >= a) {
    console.log(c);
  } else {
    console.log("The all three number is equal or any error");
  }
}

//! Question - 2

function checkNumPositiveNegativeOrZero(num) {
  if (num === 0) return `Zero`;
  else if (num >= 1) return `Positive`;
  else if (num < 0) return `Negative`;
  else return;
}

//! Question - 3

function getElectricityBill(unit) {
  if (unit <= 100) {
    return `Total Bill ₹${unit * 5}`;
  } else if (unit <= 200) {
    return `Total Bill ₹${100 * 5 + (unit - 100) * 7}`;
  } else if (unit <= 300) {
    return `Total Bill ₹${100 * 5 + 100 * 7 + (unit - 200) * 10}`;
  } else {
    return `Total Bill ₹${100 * 5 + 100 * 7 + 100 * 10 + (unit - 300) * 10}`;
  }
}

// console.log(getElectricityBill(230));

//! Question - 4

function checkCharacterIsVowelOrConsonant(char = 0) {
  const charLowerCase = char.toLowerCase();
  if ("aeiou".includes(charLowerCase) && char !== "") {
    return `${char} is Vowel`;
  } else if (/[a-z]/.test(charLowerCase)) {
    return `${char} is a Consonant`;
  }
  return `${char} is not a Valid alphabet`;
}

//! Question - 5

function leapYearCheck(year) {
  if (year % 400 === 0) {
    return `It's a Leap Year`;
  } else if (year % 100 === 0) {
    return `Is's not a Leap Year`;
  }
  return `Enter Valid Year`;
}

//* Homework Challenge

//? Question - 1

function checkCharacter(char) {
  const charCode = String(char).charCodeAt();
  if (charCode >= 65 && charCode <= 90) {
    return `${char} is a Uppercase Letter`;
  } else if (charCode >= 97 && charCode <= 122) {
    return `${char} is a Lowercase Letter`;
  } else if (charCode >= 48 && charCode <= 57) {
    return `${char} is a Digit `;
  } else if (
    (charCode >= 3 && charCode <= 46) ||
    (charCode >= 58 && charCode <= 64)
  ) {
    return `${char} is a Special Character `;
  }
}

//? Question - 2

function checkTriangleSides(side1 = 1, side2 = 1, side3 = 1) {
  if (side1 ** 2 + side2 ** 2 === side3 ** 2) {
    return `${side1} ${side2} ${side3} is a Right-angled Triangle`;
  } else if (side1 * 3 === side1 + side2 + side3) {
    return `${side1} ${side2} ${side3} is a Equilateral Triangle`;
  } else if (side1 === side2 || side2 == side3 || side1 === side3) {
    return `${side1} ${side2} ${side3} is a Isosceles Triangle`;
  } else {
    return `${side1} ${side2} ${side3} is a Scalene Triangle`;
  }
}

//? Question - 3

function getIncomeTax(income) {
  let tax = 0;

  if (income > 1000000) {
    tax += (income - 1000000) * 30/100;
    income = 1000000;
  }
  if (income > 500000) {
    tax += (income - 500000) * 20/100;
    income = 500000;
  }
  if (income > 250000) {
    tax += (income - 250000) * 5/100;
  }

  return `Total Tax is ₹${tax}`;
}
