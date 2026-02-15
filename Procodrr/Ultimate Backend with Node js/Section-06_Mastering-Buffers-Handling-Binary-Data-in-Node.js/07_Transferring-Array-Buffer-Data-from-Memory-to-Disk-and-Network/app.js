// const typedArray = new Uint8Array([0x6B, 0x61, 0x75, 0x73, 0x68, 0x69, 0x6B])
// console.log(typedArray)

import {writeFile} from 'node:fs/promises'

const uint8Array = new Uint8Array(7);


uint8Array[0] = 0x6b;
uint8Array[1] = 0x61;
uint8Array[2] = 0x75;
uint8Array[3] = 0x73;
uint8Array[4] = 0x68;
uint8Array[5] = 0x69;
uint8Array[6] = 0x6b;



// const decoder = new TextDecoder('utf-8');

// console.log(decoder.decode(uint8Array));

// console.log(uint8Array)

const view = new DataView(uint8Array.buffer)
await writeFile('buffer-text.txt', view)

console.log(view)
