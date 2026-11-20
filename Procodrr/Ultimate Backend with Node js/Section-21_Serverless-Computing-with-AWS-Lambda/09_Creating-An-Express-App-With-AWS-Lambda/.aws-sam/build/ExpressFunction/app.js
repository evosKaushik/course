import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Express running on AWS Lambda!"
  });
});
app.get("/hello", (req, res) => {
  res.json({
    message: "Hello from Express running on AWS Lambda!"
  });
});

app.post("/data", (req, res) => {
  res.json({
    message: "Data received successfully!",
    data: req.body
  });
});

export default app;