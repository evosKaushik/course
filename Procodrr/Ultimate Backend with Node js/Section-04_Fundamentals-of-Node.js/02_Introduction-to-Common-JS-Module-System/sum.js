function sum(...nums) {
  return nums.reduce((acc, num) => acc + num, 0);
}


module.exports = sum;
