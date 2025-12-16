'use strict';



let firstname = "Kaushik";

const obj = {
  name: "Kaushik",
  lastname: "Patel",
  age: 15,
  iscoder: true,
};
obj.person = false;
delete obj.age;

obj.gender = "male";
delete obj.name;

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

const obj3 = {
  name: "Rahul",
  title: "Singh",
  iscoder: false,
  age: true,
};

console.log(obj == obj3);
console.log(obj === obj3);

Object.seal(person)


// delete person.age;
person.age = person.age/2;


Object.freeze(obj3);

// obj3.gender = "male";
// delete obj3.name;



console.log(obj);
console.log(person);
console.log(obj3);
