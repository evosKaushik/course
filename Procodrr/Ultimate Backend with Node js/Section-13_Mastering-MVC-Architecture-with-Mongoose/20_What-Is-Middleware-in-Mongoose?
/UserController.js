import mongoose from "mongoose";
import User from "./UserModel.js";

const user = await User.finedOneByName( "Akash" );



console.log(user)
await mongoose.disconnect();
