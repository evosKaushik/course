// const uint8Array = new Uint8Array(4);

// uint8Array[0] = 0xfe;
// uint8Array[1] = 0xee;
// uint8Array[2] = 0x3a;
// uint8Array[3] = 0x8a;

const uint8Array = new Uint8Array(1024*1024*1024).fill(0xff);



console.log(uint8Array);

const a  = new ArrayBuffer(4, {maxByteLength: 16})
const b = a.transfer()
console.log(a)
console.log(b)

