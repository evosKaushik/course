import express from "express";
import { connectDB } from "./db.js";
import todoRoutes from "./router/todoRoutes.js"

const app = express();
const PORT = 3000;

const db = await connectDB();

app.use(express.json());
app.use((req, res, next) => {
  req.db = db;
  next();
});

app.use("/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${3000}`);
});
