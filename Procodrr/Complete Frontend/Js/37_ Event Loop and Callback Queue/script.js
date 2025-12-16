console.log("Hi-1");

function hello() {
  console.log("I am Hello");
}

for (let i = 1; i <= 4; i++) {
  console.log(i);
}

hello();
// debugger;
// debugger
setTimeout(function () {
  console.log("hi-3");
}, 0);
// const timerId = setInterval(function () {
//   console.log('DJ ALok Giveway');
// })

// setTimeout(() => {
//   clearInterval(timerId)
// }, 1000);

// async () => {
  
// }function baba() {
//   for (let i = 0; i  <= 10; i++) {
//   if (i === 10) {
//     clearInterval(timerId)
//   }
// }
// }

// baba();

let b = ''
const a = Date();
b = a
console.log(b);


document.body.innerText = setInterval(() => {
  Date()
}, 1000);
console.log("Hi-2");