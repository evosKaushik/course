function product(...nums) {
    return nums.reduce((acc, num) => acc * num, 1);
}

module.exports = product;