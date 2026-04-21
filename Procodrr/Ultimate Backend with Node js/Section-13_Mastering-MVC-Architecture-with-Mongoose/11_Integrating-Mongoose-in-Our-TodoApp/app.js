import "./db.js";
import express from "express";
import todoRoutes from "./router/todoRoutes.js";
import { createEngine } from "express-react-views";

const app = express();
const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"))



app.set("views", "./views");
app.set("view engine", "jsx");
app.engine("jsx", createEngine());

app.use("/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${3000}`);
});
