import fs from "node:fs/promises";

try {
  const fileContent = await fs.readFile("./nodejss.png");
  fs.writeFile("c:\\Users\\Kaushik\\Desktop\\node.png", fileContent);
} catch (error) {
  fs.appendFile(
    "./error.log",
    `\n\n${new Date().toLocaleTimeString()}\n${error.message}\n${error.stack}`,
  );
  console.error(error);
  console.error(`To see full error message go to error.log file`);
}

// setInterval(() => {
//     fs.writeFile('./file-1.txt', new Date().toLocaleTimeString())
// }, 100);
