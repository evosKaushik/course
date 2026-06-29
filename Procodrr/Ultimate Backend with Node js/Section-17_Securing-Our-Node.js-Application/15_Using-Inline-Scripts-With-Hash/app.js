import express from "express";
import mongoose from "mongoose";
import { createHash } from "node:crypto";

const app = express();

app.use(express.json());

const hash = createHash("sha256").update('alert("hii");').digest("base64");

console.log(hash);

await mongoose.connect(
  "mongodb://admin:admin@localhost/socialApp?authSource=admin",
);

const postSchema = new mongoose.Schema({
  content: String,
  createdAt: { type: Date, default: Date.now },
});

const Post = mongoose.model("Post", postSchema);

// Middleware

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self';\
     script-src 'self' 'sha256-RvF/YNOetVu8/g93iHlLPDDjVQbhYmNycqSRU0OEwQI=' https://cdn.tailwindcss.com;\
     img-src 'self' https://images.unsplash.com;\
     style-src 'self' 'unsafe-inline';\
     connect-src 'self';\
     report-uri /csp-violations",
  );
  next();
});

app.use(express.static("./public"));

// Routes
app.get("/posts", async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.setHeader("Set-Cookie", "loginSecret=hdxhw7yrx.k;");
  res.json(posts);
});

app.post("/posts", async (req, res) => {
  const post = new Post({ content: req.body.content });
  await post.save();
  res.status(201).json(post);
});

// Start server
app.listen(4000, () => console.log("Server running on http://localhost:4000"));
