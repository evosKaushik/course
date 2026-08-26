type PersonType<T extends { name: string }> = T;

let a: PersonType<{
  name: string;
  age: number;
}> = {
  name: "kaushik",
  age: 21,
};


type Types<T extends U, U> = T

