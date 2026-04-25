import mongoose from "mongoose";
import User from "./UserModel.js";

const user = await User.findOne({ name: "Akash" });


user.hobbiesString = "Football, COD"

console.log(user.hobbiesString);

// console.log(user.id)

// console.log(user.schema.virtuals)

await user.save()

await mongoose.disconnect();
