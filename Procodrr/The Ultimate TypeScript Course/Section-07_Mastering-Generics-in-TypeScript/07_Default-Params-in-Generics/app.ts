type Dynamic<T = string> = T;

const a: Dynamic<number> = 123;

function myFunc<T>(a: T): T {
  return a;
}

myFunc();
