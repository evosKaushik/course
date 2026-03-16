import express from "express";
import http from "node:http";

const app = express();
const port = 4000;

const middleware = (req, res, next) => {
  res.write("MiddleWare");
  console.log("Middleware");
  next();
};

app.use(middleware);

app.get("/", (req, res) => {
  res.end("Home Route");
});

app.get("/login", (req, res) => {
  res.end("Logged In");
});

app.post("/", (req, res) => {
  res.end("Post Home Route");
});
app.delete("/", (req, res) => {
  res.end("Delete Home Route");
});
app.put("/", (req, res) => {
  res.end("Put Home Route");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
