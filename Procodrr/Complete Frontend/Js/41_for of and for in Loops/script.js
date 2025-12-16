"use strict";

const fruits = ["banana", "apple", "peach", "mango", "grapes"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// console.log(fruits);

// console.log("*********************************");
// // debugger
// for (const fruit of fruits) {
//   console.log(fruit);
// }

// const users = 'kaushik'

// for (const element of users) {
//     console.log(element)
// }

// console.log('######----------------############');

const person = {
  firstName: "Kaushik",
  lastName: "Patel",
  age: 14,
  eyeColor: "blue",
  city: "Varanasi",
};

for (const key in person) {
  const element = person[key];
  console.log(element);
}

const personKeys = Object.keys(person);

for (const element of personKeys) {
  console.log(person[element]);
}
const people = [
  {
    firstName: "Kaushik",
    lastName: "Patel",
    age: 14,
    eyeColor: "blue",
    city: "Varanasi",
  },
  {
    firstName: "Aarav",
    lastName: "Sharma",
    age: 16,
    eyeColor: "brown",
    city: "Delhi",
  },
  {
    firstName: "Ishita",
    lastName: "Verma",
    age: 15,
    eyeColor: "green",
    city: "Mumbai",
  },
  {
    firstName: "Rohan",
    lastName: "Mehta",
    age: 17,
    eyeColor: "black",
    city: "Pune",
  },
  {
    firstName: "Ananya",
    lastName: "Singh",
    age: 13,
    eyeColor: "hazel",
    city: "Lucknow",
  },
  {
    firstName: "Arjun",
    lastName: "Yadav",
    age: 18,
    eyeColor: "blue",
    city: "Kolkata",
  },
  {
    firstName: "Priya",
    lastName: "Chopra",
    age: 14,
    eyeColor: "brown",
    city: "Jaipur",
  },
  {
    firstName: "Kabir",
    lastName: "Gupta",
    age: 15,
    eyeColor: "gray",
    city: "Hyderabad",
  },
  {
    firstName: "Sneha",
    lastName: "Malhotra",
    age: 16,
    eyeColor: "green",
    city: "Chennai",
  },
  {
    firstName: "Dev",
    lastName: "Reddy",
    age: 17,
    eyeColor: "black",
    city: "Ahmedabad",
  },

  // ... continue like this until 100 objects

  {
    firstName: "Saanvi",
    lastName: "Kapoor",
    age: 13,
    eyeColor: "blue",
    city: "Varanasi",
  },
  {
    firstName: "Vihaan",
    lastName: "Jain",
    age: 18,
    eyeColor: "brown",
    city: "Bhopal",
  },
  {
    firstName: "Meera",
    lastName: "Agarwal",
    age: 16,
    eyeColor: "hazel",
    city: "Patna",
  },
  {
    firstName: "Aryan",
    lastName: "Khan",
    age: 17,
    eyeColor: "green",
    city: "Surat",
  },
  {
    firstName: "Ritika",
    lastName: "Saxena",
    age: 15,
    eyeColor: "black",
    city: "Chandigarh",
  },
];
const peopleKeys = Object.keys(people)
for (const element of peopleKeys) {
    console.log(Object.values(people[element]));
}
// console.log(people[1]);
console.log(Object.values(people[1]));