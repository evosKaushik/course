import mongoose from "mongoose";
import User from "./UserModel.js";

const user = await User.findOne({ name: "Aman" });

console.log(user);
await mongoose.disconnect();
