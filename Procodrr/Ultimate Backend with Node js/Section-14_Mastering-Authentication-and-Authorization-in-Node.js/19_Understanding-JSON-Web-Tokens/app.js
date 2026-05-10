import jwt from "jsonwebtoken";
import { createHmac } from "node:crypto";

const token = jwt.sign({ name: "Kaushik" }, "Secret", {
  algorithm: "HS256",
  expiresIn: 10,
});

// console.log(token)

console.log(
  jwt.verify(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiS2F1c2hpayIsImlhdCI6MTc3ODQ0MzcyNiwiZXhwIjoxNzc4NDQzNzM2fQ.X_TE1xcbufqax6mnlNyGRRQn835lYCbTQN_6ZfgG5bI",
    "Secret",
  ),
);

// console.log(
//   Buffer.from(
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiS2F1c2hpayIsImlhdCI6MTc3ODQ0Mjk5OX0",
//     "base64url",
//   ).toString(),
// );

// console.log(
//   createHmac("sha256", "Secret")
//     .update(
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiS2F1c2hpayIsImlhdCI6MTc3ODQ0MzE0MX0",
//     )
//     .digest("base64url"),
// );
