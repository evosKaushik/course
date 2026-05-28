import mongoose from "mongoose";
import User from "./UserModel.js";

// const result = await User.insertMany([
//   { name: "Aman", age: 40, email: "aman@example.com" },
//   { name: "Raman", age: 20, email: "raman@example.com" },
// ]);


const user = await User.findById("69eeedf21eee60013d44ba89").exec();
console.log(user);



await mongoose.disconnect();
