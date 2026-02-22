import fs from "node:fs";

const writeStream = fs.createWriteStream("file.txt", { highWaterMark: 4 });

// console.log(writeStream.writableLength);
// let isEmpty = writeStream.write("a");
// console.log(isEmpty)
// console.log(writeStream.writableLength);
// isEmpty = writeStream.write("a");
// console.log(isEmpty)
// console.log(writeStream.writableLength);
// isEmpty = writeStream.write("a");
// console.log(isEmpty)
// console.log(writeStream.writableLength);

// await new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve()
//     }, 1000);
// })

// isEmpty = writeStream.write("a");
// console.log(isEmpty)

// console.log(writeStream.writableLength);
// isEmpty = writeStream.write("a");
// console.log(isEmpty)
// console.log(writeStream.writableLength);

let i = 1;

while (i <= 1000) {
  console.log(writeStream.writableLength);
  write1000A();
}

writeStream.on("drain", () => {
  console.log("Drain", writeStream.writableLength);
  write1000A();
});

function write1000A() {
  while (i <= 1000) {
    console.log(writeStream.writableLength);
    let isEmpty = writeStream.write("a");
    i++;
    if (!isEmpty) {
      break;
    }
    console.log(isEmpty);
  }
}
