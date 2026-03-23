import express from "express";
import cors from "cors";
import multer from "multer";
import path from "node:path";

const storage = multer.diskStorage({
  destination(req, res, cb) {
    cb(null, "./uploads");
  },
  filename(req, file, cb) {
    const id = crypto.randomUUID();
    const extension = path.extname(file.originalname);
    file.id = id;
    cb(null, `${id}${extension}`);
  },
});
const upload = multer({ storage });

const app = express();

app.use(express.static("./public"));

app.use(express.json());
app.use(cors());

app.post(
  "/upload",
  upload.fields([
    { name: "profilePic", maxCount: 1 },
    { name: "bg", maxCount: 1 },
  ]),
  (req, res) => {
    console.log(req.body);

    res.json({ files: req.files, body: req.body });
  },
);

app.listen(4000, () => {
  console.log(`Server Started`);
});
