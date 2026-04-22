import User from "./UserModel.js";

const user = await User.findOne({ name: "Akash" }).populate({
  path: "parentId",
  select: "name email -_id",
});

console.log(user);
