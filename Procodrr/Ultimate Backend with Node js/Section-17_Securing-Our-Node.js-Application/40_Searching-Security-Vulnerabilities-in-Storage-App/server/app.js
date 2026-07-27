import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import directoryRoutes from "./routes/directoryRoutes.js";
import fileRoutes from "./routes/fileRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import checkAuth from "./middlewares/authMiddleware.js";
import { connectDB } from "./config/db.js";
import RedisStore from "rate-limit-redis";
import helmet from "helmet";
import { rateLimit, MINUTE } from "express-rate-limit";
import redisClient from "./config/redis.js";

const limiter = rateLimit({
  windowMs: 15 * MINUTE, 
  limit: 100, 
  standardHeaders: "draft-8", 
  legacyHeaders: false, 
  ipv6Subnet: 56, 
  store: new RedisStore({
    sendCommand: (...args) => redisClient.sendCommand(args),
  }),
});

await connectDB();

const PORT = process.env.PORT || 4000;

const app = express();

app.use(limiter);
app.use(helmet());
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

app.use("/directory", checkAuth, directoryRoutes);
app.use("/file", checkAuth, fileRoutes);
app.use("/", userRoutes);
app.use("/auth", authRoutes);

app.use((err, req, res, next) => {
  console.log(err);
  // res.status(err.status || 500).json({ error: "Something went wrong!" });
  res.json(err);
});

app.listen(PORT, () => {
  console.log(`Server Started`);
});
