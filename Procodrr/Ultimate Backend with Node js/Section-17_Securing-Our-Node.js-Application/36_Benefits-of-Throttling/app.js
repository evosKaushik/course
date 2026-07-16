import express from "express";
import bcrypt from "bcrypt";
import { rateLimit } from "express-rate-limit";

const app = express();
const PORT = 4000;

const globalLimiter = rateLimit({
  windowMs: 20_0000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
});

app.use(globalLimiter);
app.use(express.static("./public"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

const throttleObj = {};

let previousDelay = 0;
let lastRequestTime;

function throttle(waitTime = 2000) {
  return (req, res, next) => {
    const now = Date.now();

    const ip = req.ip;

    const { previousDelay, lastRequestTime } = throttleObj[ip] || {
      lastRequestTime: now,
      previousDelay: now - waitTime,
    };

    const timePassed = now - lastRequestTime;
    const delay = Math.max(0, waitTime + previousDelay - timePassed);
    throttleObj[ip] = {
      lastRequestTime: now,
      previousDelay: delay,
    };
    setTimeout(next, delay);
  };
}

app.use(throttle);

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
