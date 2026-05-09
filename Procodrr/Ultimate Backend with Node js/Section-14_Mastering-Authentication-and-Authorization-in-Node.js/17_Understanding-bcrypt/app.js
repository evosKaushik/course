import bcrypt from "bcrypt";

// const salt = await bcrypt.genSalt(10);

const hashPassword = await bcrypt.hash("password", "$2b$14$STYk1PryEKER3RJ.VZEIVe")

console.log(hashPassword);
