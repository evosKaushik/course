import mongoose from "mongoose";
import User from "./UserModel.js";

const result = await User.insertMany([
  { name: "Aman", age: 40, email: "aman@example.com" },
  { name: "Raman", age: 20, email: "raman@example.com" },
]);

console.log(result);

await mongoose.disconnect();
