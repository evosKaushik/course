import mongoose from "mongoose";
import User from "./UserModel.js";

const user1 = await User.findOne({ email: "akash@gmail.com" });
const user2 = await User.findOne({ email: "akash@gmail.com" });

console.log(user1.__v)
user1.balance += 500
await user1.save()
console.log(user1.__v)

// user1.hobbies = ["Cricket", "Football"];

// await user1.save();

// console.log(user1);

console.log(user2.__v)
user2.balance += 200
await user2.save()
console.log(user2.__v)

// user1.hobbies.splice(0, 1);
// await user1.save();

// user2.hobbies.splice(1, 1);
// await user2.save();

await mongoose.disconnect();
