import mongoose from "mongoose";

await mongoose.connect("mongodb://admin:admin@localhost");

console.log("Database Connected");
mongoose.set("autoCreate", false);

const UserModel = mongoose.model("User", { name: String, age: Number });

const data = await UserModel.insertOne({ name: false, age: "123" });

console.log(data);
