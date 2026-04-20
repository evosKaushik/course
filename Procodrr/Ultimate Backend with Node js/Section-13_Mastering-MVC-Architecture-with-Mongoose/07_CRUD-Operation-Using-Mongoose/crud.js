import User from "./UserModel.js";

const user = await User.findOneAndDelete(
  {
  
  },
);

console.log(user);
