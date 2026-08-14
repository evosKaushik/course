function mergeObject<T extends object, U extends object>(
  obj1: T,
  obj2: U,
): T & U {
  return { ...obj1, ...obj2 };
}

const result = mergeObject({ name: "hello" }, { age: 29 })

console.log(result);
