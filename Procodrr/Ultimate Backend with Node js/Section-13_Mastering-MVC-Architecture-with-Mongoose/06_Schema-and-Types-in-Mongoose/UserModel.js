import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name field is required. Please enter the name"],
      minLength: [3, "Name should be at least 3 character"],
    },
    age: {
      type: Number,
      required: [true, "Age field is required. Please enter the age"],
      minLength: 2,
    },
    email: {
      type: String,
      required: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter a valid email",
      ],
    },
    hobbies: {
      type: [String],
    },
    parentId: {
      type: Schema.Types.ObjectId,
      required: function(){
        return this.age < 16
      },
      default: null
    }
  },
  {
    strict: "throw",

    timestamps: true
  },
);

const User = mongoose.model("User", userSchema);

const data = await User.insertOne({
  name: "kaushik",
  age: 20,
  email: "kaushik@gmail.com",
  hobbies: ["Football"],
});

console.log(data);
