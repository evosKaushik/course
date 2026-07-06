function add(a: number, b: number): number {
  return a + b;
}
function subtract(a: number, b: number): number {
  return a - b;
}
function multiply(a: number, b: number): number {
  return a * b;
}

const result = add(1, 2);

function printUpperCase(str: string): void {
  console.log(str.toUpperCase());
  return undefined;
}

function throwError(str: string): never {
  throw new Error(str);
}

function loop(): never {
  while (true) {}
}
