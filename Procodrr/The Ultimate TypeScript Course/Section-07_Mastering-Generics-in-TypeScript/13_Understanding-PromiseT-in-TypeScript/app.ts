// const myPromise: Promise<string> = new Promise((resolve, reject) => {
//   resolve("Hi");
// });
const myPromise = new Promise<string>((resolve, reject) => {
  resolve("Hi");
});

const result = await myPromise;

console.log(result);
