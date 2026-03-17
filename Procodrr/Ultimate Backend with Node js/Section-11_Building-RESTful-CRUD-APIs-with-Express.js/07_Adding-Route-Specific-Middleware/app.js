import express from "express";
import http from "node:http";

const app = express();
const port = 4000;

app.use(express.json());

//req.url, routeName
//req.url.startWith(routeName)
//"user/1".startWith("/users")

app.use('/admin', (req, res, next)=>{
  console.log(req.url);
  console.log("Middleware 2" );
  next()
})

app.use('/', (req, res, next)=>{
  console.log(req.url);
  console.log("Middleware");
  next()
})



// app.use("/admin", (req, res, next) => {
//   const { username, password } = req.body;
//   if (password === "secret") {
//     next()
//   }else{
//     res.end("Hacker Ho tum")
//   }
// });

app.post("/admin", (req, res, next) => {
  res.end("Hello Admin");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
