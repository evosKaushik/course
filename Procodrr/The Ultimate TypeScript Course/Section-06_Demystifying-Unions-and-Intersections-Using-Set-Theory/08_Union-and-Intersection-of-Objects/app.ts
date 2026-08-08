type T0 = {};
type T1 = { length: number };
type T2 = { length: number; name: string };
type T3 = { toString(): string };

type T4 = T1 | T2;

const a = {
  length: 80,
  name: "Hii",
};

const obj: T4 = {
  length: 80,
};

obj.length;
