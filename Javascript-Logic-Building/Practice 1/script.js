//Problem Statement - 1

console.log("Hello World");

// Problem Statement - 2

const sum = (a, b) => {
  return a + b;
};

console.log('The sum is:',sum(2, 5));

// Problem Statement - 3

const calculateArea = (length, width) => {
    console.log(`The Area of the rectangle is: ${length * width}`);
    if ((length <= 0) || (width <= 0)){
        throw new RangeError("Lenth will be Postive"); 
    }
}
calculateArea(123, 213)
calculateArea(12, 6)
calculateArea(10, 6)
calculateArea(10, 6)
calculateArea(12, 6)
