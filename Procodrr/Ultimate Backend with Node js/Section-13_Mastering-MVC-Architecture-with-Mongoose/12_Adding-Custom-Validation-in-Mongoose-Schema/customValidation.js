import User from "./UserModel.js";

// const user  = await User.findOne()
const user  = await User.create({
  name: "John Doe",
  age: 28,
  email: "john.doe@example.com",
  hobbies: ["reading", "swimming"]
});


// console.log(json)
