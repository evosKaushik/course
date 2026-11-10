import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import { Note } from "./models/Note.js";

const PORT = process.env.PORT || 5000;
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/mern-notes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({ message: "Server is healthy" });
});

app.get("/api/notes", async (_req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch notes", error });
  }
});

app.get("/api/notes/:id", async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch note", error });
  }
});

app.post("/api/notes", async (req, res) => {
  try {
    const { title, content } = req.body as { title?: string; content?: string };
    if (!title?.trim() || !content?.trim()) {
      return res
        .status(400)
        .json({ message: "Title and content are required" });
    }

    const note = await Note.create({ title, content });
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: "Failed to create note", error });
  }
});

app.put("/api/notes/:id", async (req, res) => {
  try {
    const { title, content } = req.body as { title?: string; content?: string };
    if (!title?.trim() || !content?.trim()) {
      return res
        .status(400)
        .json({ message: "Title and content are required" });
    }

    const note = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true, runValidators: true },
    );

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: "Failed to update note", error });
  }
});

app.delete("/api/notes/:id", async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: "Note deleted", id: note.id });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete note", error });
  }
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  });
