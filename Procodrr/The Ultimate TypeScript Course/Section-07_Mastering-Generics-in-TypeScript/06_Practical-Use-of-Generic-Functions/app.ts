function map<T, U>(arr: T[], cb: (value: T) => U): U[] {
  const output = [];

  for (const item of arr) {
    output.push(cb(item));
  }

  return output;
}

const result = map([1, 2, 3, 4, 5, 6], (el: any) => el * 2);
