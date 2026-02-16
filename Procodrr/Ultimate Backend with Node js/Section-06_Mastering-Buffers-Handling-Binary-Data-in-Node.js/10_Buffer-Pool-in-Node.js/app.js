import { Buffer, constants } from "buffer";

// Condition for allocUnsafe to use Buffer Pool
// BufferSize < Buffer.poolSize >>> 1

// console.log(constants.MAX_STRING_LENGTH);

// const a = Buffer.alloc(4);
// const z = Buffer.alloc(4);

// const joinBuffer = Buffer.concat([a, z]);

const x = Buffer.allocUnsafe(4);
const y = Buffer.allocUnsafeSlow(4);

console.log(x.buffer.byteLength)
console.log(y.buffer.byteLength)

// const b = Buffer.allocUnsafe(4095);
// const c = Buffer.allocUnsafe(4095);
// const d = Buffer.from("abc");

// b[2] = 97;
// c[0] = 101;

// console.log(a.byteLength);
// console.log(b.byteLength);
// console.log("*****************************");
// console.log(a.buffer.byteLength);
// console.log(b.buffer === c.buffer);
console.log("End");
