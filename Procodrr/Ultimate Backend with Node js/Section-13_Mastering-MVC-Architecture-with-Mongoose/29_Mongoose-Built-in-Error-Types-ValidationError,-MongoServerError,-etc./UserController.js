import mongoose from "mongoose";
import User from "./UserModel.js";

// console.log(mongoose.Error);
console.log(mongoose.mongo.MongoServerError);

await mongoose.disconnect();
