import express from "express";
import bcrypt from "bcrypt";
import { rateLimit } from "express-rate-limit";
import { slowDown } from "express-slow-down";

const app = express();
const PORT = 4000;

const globalLimiter = rateLimit({
  windowMs: 20_0000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
});

const throttleLimiter = slowDown({
  windowMs: 5_0000,
  delayMs: 1000,
});

app.use( throttleLimiter);

app.use(express.static("./public"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/api", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/register", async (req, res) => {
  bcrypt.hashSync("123456", 14);
  return res.json({ message: "Registered Successfully" });
});

app.listen(PORT, () => {
  console.log(`🚀 Visit http://localhost:${PORT}`);
});
