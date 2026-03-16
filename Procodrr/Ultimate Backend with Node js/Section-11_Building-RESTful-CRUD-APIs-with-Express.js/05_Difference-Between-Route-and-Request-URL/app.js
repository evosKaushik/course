import express from "express";
import http from "node:http";

const app = express();
const port = 4000;



app.get("/", (req, res) => {
  console.log(req.url);
  console.log(req.route);
  console.log(req.route.path);
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
