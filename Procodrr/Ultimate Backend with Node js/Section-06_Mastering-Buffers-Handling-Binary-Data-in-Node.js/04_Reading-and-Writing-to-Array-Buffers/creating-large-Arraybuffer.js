const a = new ArrayBuffer(1024 * 1024 * 1024); //1GB
const view = new DataView(a);

for (let i = 0; i < view.byteLength; i++) {
  view.setInt8(i, i + 1);
}
console.log(view)