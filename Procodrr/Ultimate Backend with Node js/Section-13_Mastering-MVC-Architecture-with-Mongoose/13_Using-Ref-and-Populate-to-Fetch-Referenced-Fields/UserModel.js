import mongoose, { Schema } from "mongoose";
import { model } from "mongoose";

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
      min: 12,
      validate: {
        validator: function () {
          return this.age % 2 === 0;
        },
        message:
          "Age must be greater than or equal to 12 and should be an even number",
      },
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
      required: function () {
        return this.age < 16;
      },
      default: null,
      ref: "User",
    },
  },
  {
    strict: "throw",
    timestamps: true,
  },
);

const User = model("User", userSchema);

export default User;
