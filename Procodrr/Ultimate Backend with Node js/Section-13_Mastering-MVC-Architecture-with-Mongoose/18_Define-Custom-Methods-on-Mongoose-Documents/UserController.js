import mongoose from "mongoose";
import User from "./UserModel.js";

const user = await User.findOne({ name: "Akash" });



console.log(user.getSummary())


await mongoose.disconnect();
