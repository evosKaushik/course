// import fs from "node:fs";
import fs from "node:fs/promises";

// console.log(fs)

// const content = fs.readFileSync('./npx-searching-step.txt', "utf-8")
// const content  = contentBuffer.toString()
// fs.readFile("./npx-searching-step.txt", (err, data) => {
//   const content = data.toString();
//   console.log(content);
// });

let i = 0
setInterval(() => {
    console.log(i++)
}, 5);

console.log('Starting')

const contentBuffer = await fs.readFile("./npx-searching-step.txt");
// const contentBuffer = fs.readFileSync("./npx-searching-step.txt");
// const content = contentBuffer.toString()
console.log('Reading Done')

console.log("End");
