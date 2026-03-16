import express from "express";
import http from "node:http";

const app = express();
const port = 4000;

// app.use((req, res, next) => {
//   req.on("data", (chunk) => {
//     const reqBody = JSON.parse(chunk.toString());
//     req.body = reqBody;
//     next();
//   });
// });

app.use(express.json())

const jsonParser = express.json()

console.log(jsonParser);

app.get("/", (req, res) => {
  console.log(req.url);
  console.log(req.route.path);
  res.end("Home Route");
});

app.get("/login", (req, res) => {
  res.end("Logged In");
});
app.post("/user", (req, res) => {
  res.end("Procodrr");
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
