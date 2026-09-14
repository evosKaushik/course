import express from "express";

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
  res.json({
    message: "Hello World!"
  })
});

app.post("/webhook", (req, res)=>{
console.log(req.body)
console.log(req.body.payload)
res.json({message: "Got the data."})
})


app.listen(4000, () => {
  console.log("Server started");
});
