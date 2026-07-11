import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
import bcrypt from "bcrypt";

const app = express();
const PORT = 4000;

const rateLimiterStore: {
  [ip: string]: {
    startTime: number;
    count: number;
  };
} = {};

const WINDOW_MS = 60 * 1000;
const MAX_REQUESTS = 2;

function rateLimiter(
  { windowMs = WINDOW_MS, max = MAX_REQUESTS } = {
    windowMs: WINDOW_MS,
    max: MAX_REQUESTS,
  },
) {
  return function (req: Request, res: Response, next: NextFunction) {
    const ip = req.ip;
    if (typeof ip !== "string") {
      return next();
    }
    const currentTime = Date.now();

    if (!rateLimiterStore[ip]) {
      rateLimiterStore[ip] = { startTime: currentTime, count: 1 };
      return next();
    }

    const record = rateLimiterStore[ip];
    const elapsedTime = currentTime - record.startTime;

    if (elapsedTime > windowMs) {
      record.startTime = currentTime;
      record.count = 1;
      return next();
    }

    if (record.count >= max) {
      return res.status(429).json({
        error: "Too many requests, please try again later.",
      });
    }

    record.count++;
    next();
  };
}

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

// app.use(rateLimiter);

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/register",rateLimiter({ windowMs: 10 * 1000, max: 1 }), async (req, res) => {
  bcrypt.hashSync("123456", 14);
  return res.json({ message: "Registered Successfully" });
});

app.on("mount", (parent) => {
  console.log("App mounted on parent:", parent);
});


app.listen(PORT, () => {
  console.log(`🚀 Visit http://localhost:${PORT}`);
});
