import express from "express";
import { writeFile } from "fs/promises";
import directoriesData from "../directoriesDB.json" with { type: "json" };
import usersData from "../usersDB.json" with { type: "json" };
import checkAuth from "../middlewares/authMiddleware.js";
import { ObjectId } from "mongodb";

const router = express.Router();

router.post("/register", async (req, res, next) => {
  const db = req.db;
  const usersCollection = db.collection("users");
  const directoriesCollection = db.collection("directories");
  const { name, email, password } = req.body;

  const foundUser = await usersCollection.findOne({ email });
  if (foundUser) {
    return res.status(409).json({
      error: "User already exists",
      message:
        "A user with this email address already exists. Please try logging in or use a different email.",
    });
  }

  try {
    const { insertedId: directoriesInserted_Id } =
      await directoriesCollection.insertOne({
        name: `root-${email}`,
        parentDirId: null,
        files: [],
        directories: [],
      });

    const { insertedId: userInserted_Id } = await usersCollection.insertOne({
      name,
      email,
      password,
      rootDirId: directoriesInserted_Id,
    });

    await directoriesCollection.updateOne(
      { _id: directoriesInserted_Id },
      { $set: { userId: userInserted_Id } },
    );

    res.status(201).json({ message: "User Registered" });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  const db = req.db;
  const { email, password } = req.body;
  const usersCollection = db.collection("users");
  try {
    const user = await usersCollection.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(404).json({ error: "Invalid Credentials" });
    }
    res.cookie("uid", user._id.toString(), {
      httpOnly: true,
      maxAge: 60 * 1000 * 60 * 24 * 7,
    });
    res.json({ message: "logged in" });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/", checkAuth, (req, res) => {
  res.status(200).json({
    name: req.user.name,
    email: req.user.email,
  });
});

router.post("/logout", (req, res) => {
  res.clearCookie("uid");
  res.status(204).end();
});

export default router;
