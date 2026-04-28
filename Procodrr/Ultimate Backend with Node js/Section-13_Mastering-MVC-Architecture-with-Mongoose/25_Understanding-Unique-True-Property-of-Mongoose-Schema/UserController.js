import mongoose from "mongoose";
import User from "./UserModel.js";



// try {
//   const user = await User.insertOne({
//     name: "Akash",
//     email: "akash@gmail.com",
//     age: 20,
//   });
//   console.log(user);
// } catch (err) {
//   console.log(err);
// }

// const user = await User.findById("69eeedf21eee60013d44ba89").exec();
// console.log(user);

await mongoose.disconnect();
