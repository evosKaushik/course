import User from "./UserModel";

const user = await User.findOne({age: {$gt: 12}})

user.age = 30

await user.save()

await User.findOneAndUpdate(
  {
    email: "Ankit@gmail.com",
  },
  { age: 50 },
  {returnDocument: true, runValidators: true}
);