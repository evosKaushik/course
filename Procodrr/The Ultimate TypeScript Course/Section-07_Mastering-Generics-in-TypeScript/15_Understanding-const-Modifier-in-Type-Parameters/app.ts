function echo<const T>(value: T) {
  return value;
}

const result1 = echo("hi");
const result2 = echo(1);
const result3 = echo(false);
const result4 = echo([1, 2, 3] as const);

const result5 = echo(["a", "b", "c"])