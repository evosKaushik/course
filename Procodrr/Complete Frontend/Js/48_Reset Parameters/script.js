const num1 = [1, 2, 3, 4, 5];

// function add(...num2) {
//   console.log("nums: ", num2);
//   //   let result = 0;
//   //   for (let index = 0; index < num2.length; index++) {
//   //     result += num2[index];
//   //   }
//   return  num2.reduce((accumulator, num) => {
//     accumulator + num;
//   }, 0);
// }

// function add(...num) {
//   return [...arguments].reduce((acc, curr) => acc + curr )
// }
// function add(...num) {
//   return Array.from(arguments).reduce((acc, curr) => acc + curr )
// }


function Addition(...num) {
    let result = 0
    console.log(num);
    return num.reduce((arr, curr)=> {
        return arr + curr
    })

}