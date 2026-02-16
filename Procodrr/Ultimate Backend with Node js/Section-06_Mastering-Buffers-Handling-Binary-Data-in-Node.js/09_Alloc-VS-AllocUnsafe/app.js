import { Buffer } from "node:buffer";

const buffer1 = Buffer.alloc(4500)
const buffer2 = Buffer.allocUnsafe(4500)

// console.log(buffer1)
// console.log(buffer2)

// console.log(buffer1.toString())
console.log(buffer2.toString())