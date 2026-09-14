import express from "express";

const app = express();


app.get("/", (req, res) => {
  res.json({
    message: "Hello World!"
  })
});

app.post("/webhook", (req, res)=>{
console.log(req.body)
})


app.listen(4000, () => {
  console.log("Server started");
});
