import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors({ origin: "http://127.0.0.1:5500", credentials: true }));

app.get("/", (req, res) => {
  console.log(req.cookies);
  res.json({
    message: "Hello World!",
  });
});

app.listen(4000, () => {
  console.log(`Server Started`);
});
