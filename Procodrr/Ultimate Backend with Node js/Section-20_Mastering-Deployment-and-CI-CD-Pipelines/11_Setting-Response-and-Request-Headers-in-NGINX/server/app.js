import express from "express";

const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  console.log(req.headers);
  //   res.send("Hello, World!");
  res.setHeader("my-custom-header", "Hello from Server")
  res.setHeader("Server", "AI-WALA :)")
  res.json({ message: "Hello from Node.js!!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
