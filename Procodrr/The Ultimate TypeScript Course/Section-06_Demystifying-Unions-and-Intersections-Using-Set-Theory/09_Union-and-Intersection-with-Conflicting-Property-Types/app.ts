interface Person1 {
  name: string;
  age: number;
}

interface Person2 {
  name: string;
  age: string;
}

const obj: Person1 | Person2 = {
  name: "Kaushik",
};
