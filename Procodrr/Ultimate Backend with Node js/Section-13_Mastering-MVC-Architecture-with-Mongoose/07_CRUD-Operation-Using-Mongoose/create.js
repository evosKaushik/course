await User.create([
  {
    name: "Syam",
    age: 19,
    email: "Syam@gmail.com",
    hobbies: ["Gamer"],
  },
  {
    name: "Akash",
    age: 13,
    email: "Akash@gmail.com",
    hobbies: ["Sleeping"],
    parentId: "69e5b7582f0ea1304608015e",
  },
]);
await User.create([
  {
    name: "Mohit",
    age: 19,
    email: "Mohit@gmail.com",
    hobbies: ["Gamer"],
  },
]);
await User.insertOne([
  {
    name: "Mohit",
    age: 19,
    email: "Mohit@gmail.com",
    hobbies: ["Gamer"],
  },
]);

new User({
  name: "Ankit",
  age: 12,
  email: "Ankit@gmail.com",
  hobbies: ["Footballer"],
  parentId: "69e5b7d9b82a9bdd649d864b",
});

await user.save();