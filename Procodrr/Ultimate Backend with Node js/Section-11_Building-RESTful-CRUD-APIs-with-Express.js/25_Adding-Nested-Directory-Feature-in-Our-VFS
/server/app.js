import express from "express";
import cors from "cors";
import directoryRoutes from "./routes/directory.routes.js";
import filesRoutes from "./routes/file.routes.js";

const app = express();

app.use(express.json());
app.use(cors()); 

app.use("/directory", directoryRoutes);
app.use("/file", filesRoutes);

app.listen(4000, () => { 
  console.log(`Server Started`);
});
