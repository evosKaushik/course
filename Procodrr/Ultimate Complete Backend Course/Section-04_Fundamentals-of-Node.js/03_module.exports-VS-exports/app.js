const { sum, product } = require("./math.js");

// console.log(sum, product)

console.log(sum(1, 2, 3, 4, 5));
console.log(product(1, 2, 3, 4, 5));

const user = {
  name: "Kaushik Patel",
  age: 52,
  address: {
    city: "Lucknow",
    state: "Uttar Pradesh",
  },
  hobbies: ["Teaching", "Coding", "Football"],
};

let address = user.address;

console.log(user.address === address);

// address.pinCode = 123412;
// address.country = "India";

address = {
  pinCode: 123412,
  country: "India",
};

// console.log(user.address);
// console.log(address);
