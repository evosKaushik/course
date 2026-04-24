import { model, Schema } from "mongoose";

const userSChema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: [
        3,
        "name field should a string with at least three characters",
      ],
    },
    email: {
      type: String,
      required: true,
      match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/, "please enter a valid email"],
    },
    password: {
      type: String,
      required: true,
      minLength: [4, "password field should a string with at least four characters"],
    },
    rootDirId: {
      type: Schema.Types.ObjectId,
      ref: "Directory",
      required: true
    },
  },
  {
    strict: "throw",
  },
);

const User = model("User", userSChema);
export default User;
