function myFunc(a: string | number) {
  if (typeof a === "number") {
    return a * 2;
  } else {
    return a.toUpperCase();
  }
}


const num = myFunc(23)
const str = myFunc("kaushik")

console.log({num, str})