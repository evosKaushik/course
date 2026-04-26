import mongoose from "mongoose";
import User from "./UserModel.js";

const user = new User({
  name: "Aman",
  age: 30,
  email: "john.doe@example.com",
  hobbies: ["reading", "gaming"],
});

await user.save()

console.log(user);
await mongoose.disconnect();
