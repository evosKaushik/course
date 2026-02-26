import fs from "node:fs/promises";

const fileHandle = await fs.open("text.txt", "r+");

const { buffer, bytesRead } = await fileHandle.read({
  buffer: Buffer.alloc(10),
});

const { buffer: writtenBuffer, bytesWritten } = await fileHandle.write(Buffer.from("Hii"));

console.log({ writtenBuffer });
console.log({ bytesWritten });

fileHandle.close()
