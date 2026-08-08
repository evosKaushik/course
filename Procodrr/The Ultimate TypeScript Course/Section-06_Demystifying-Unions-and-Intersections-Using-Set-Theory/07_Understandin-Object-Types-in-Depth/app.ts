type T0 = {}
type T1 = { length: number };
type T2 = { length: number; name: string };

type Person1 = { name: string };
type Person2 = { name: string; age: number; city: "Delhi" };

const a = {
  length: 60,
  age: 60,
};

const obj1: T1 = a;

const obj2: T1 = function (a: string) {};

const obj: T0 = false

console.log(obj.test)