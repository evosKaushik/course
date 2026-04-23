import { model, Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 12,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 20,
  },
  rootDirId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Directory"
  }
});

const User = model("User", userSchema);

export default User;
