const fs = require("fs");

const textContent = fs.readFileSync("./text.txt");
console.log(textContent.toString());
console.log(global)
console.log("End");
