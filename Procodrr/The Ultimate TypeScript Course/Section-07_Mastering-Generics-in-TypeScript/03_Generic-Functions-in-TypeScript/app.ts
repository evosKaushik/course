// ! Generics Are used in
// ? Type Aliases
// ? Interfaces
// ? Function
// ? Classes

type DynamicType<> = string;

function echoString<T>(a: T): T {
  // const b: T = a
  return a;
}


const num = echoString<number>(32)
const str  = echoString("Hello")