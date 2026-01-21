#!node
console.log("Hi");

let num = 0;
setInterval(() => {
  console.log(num++);
}, 1000);
