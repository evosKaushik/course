// Function Declaration

// function square(num) {
//     return num * num
// }

// Function Expression


const square = function (num) {
    return num * num;
}

// Arrow Function Expression

// const a = (num) => {
    //     return num * num
    // }
    
const a = (num) =>  num * num
const b = c =>  c * c

const abc = () => (
    console.log(23)
)

console.log(a(21));


// setTimeout(() => {
//     console.log('Hii');
// }, 1000);

const random = () => Math.random() * 10/*  */