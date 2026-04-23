import { connect } from "mongoose";

await connect("mongodb://admin:admin@localhost/storageApp?authSource=admin")
console.log("Mongoose connected")