import express from "express";
import cors from "cors"

const app = express();
const PORT = 4000;

app.use(express.static("./public"))
app.use(cors())

app.get("/api", (req, res) => {
  res.json({ message: "Hello, world get!" });
});
app.post("/api", (req, res) => {
  res.json({ message: "Hello, world post!" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});
