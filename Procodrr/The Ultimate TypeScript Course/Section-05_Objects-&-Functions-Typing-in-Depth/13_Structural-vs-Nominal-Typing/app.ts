interface Person {
  name: string;
  age: number;
}

interface User {
  name: string;
}

const person: Person = {
  name: "Ram",
  age: 12,
};

const obj = {
  name: "Ram",
  age: 12,
  email: "ram@example.com"
}

const user: User = obj; // We can assign obj to user because obj has at least the properties of User (name). This is an example of structural typing in TypeScript, where the shape of the object determines compatibility, not the explicit type.

// const user: User = person;

function xyz(x: User){
  return void 0;
}

xyz(obj); // This is valid because obj has the required property 'name' that matches the User interface.


// const abc: {} 