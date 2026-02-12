#!node
import fs from "node:fs/promises";

const filePath = process.argv[2];

if (!filePath || !filePath === "" || !filePath.startsWith("./")) {
  console.error("Please provide a file path");
  process.exit(1);
}
const filterWordArgv = process.argv[3];

const fileContent = await fs.readFile(filePath, "utf-8");

const words = fileContent.split(/[\W]/).filter((word) => word !== "");

const wordsCount = {};

words.forEach((word) => {
  word.toLowerCase();
  if (word in wordsCount) {
    wordsCount[word] += 1;
  } else {
    wordsCount[word] = 1;
  }
});


if (filterWordArgv) {
    console.log(wordsCount[filterWordArgv])
} else {
  console.log(wordsCount);
}
