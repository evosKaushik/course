let a = [1, 2, 3, 4, 5, 6, 7]

// const result = a.map((el) => el % 2 === 0)
// const result = a.filter((el) => el % 2 === 0)

const result = a.reduce((curr, acc) => curr + acc, 0)

console.log(result)