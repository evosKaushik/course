import fs from "fs";

const NO_OF_TIMES = 100000;

console.time();

for (let i = 0; i <= NO_OF_TIMES; i++) {
  if (i === 1) {
    fs.writeFileSync("numbers.txt", `${i}, `);
  } else {
    fs.appendFileSync("numbers.txt", `${i}, `);
  }
}
 

console.timeEnd();
