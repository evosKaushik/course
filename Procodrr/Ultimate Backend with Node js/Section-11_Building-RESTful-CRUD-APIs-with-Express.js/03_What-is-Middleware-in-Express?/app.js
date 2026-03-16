import express from "express";
import http from "node:http";

const app = express();
const port = 4000;

const errorFun = (err, req, res, next) => {
  // Request Handler Middleware - 2 Params
  console.log(err);
  console.log("Running error middleware");
};

app.get(
  "/",
  (req, res, next) => {
    // Request Handler Middleware - 3 Params
    console.log("Running middleware 1");
    next("Error");
    res.send("Hello World! 1");
  },
  errorFun,
  (req, res) => {
    // Request Handler Middleware - 2 Params
    console.log("Running middleware 2");
    res.write("Hello World! 2");
  },
);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
