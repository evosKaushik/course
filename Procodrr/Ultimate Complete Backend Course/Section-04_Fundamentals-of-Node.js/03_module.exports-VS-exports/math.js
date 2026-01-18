function sum(...nums) {
  return nums.reduce((acc, num) => acc + num, 0);
}

function product(...nums) {
  return nums.reduce((acc, num) => acc * num, 1);
}

//! exports = { sum, product }; Wrong❌
module.exports = { sum, product };
// console.log(module.exports);

// let send = module.exports

// exports.sum = sum
// exports.product = product

// console.log(module.exports === exports)

// module.exports.sum = sum
// module.exports.product = product

console.log(module);
