import express from "express";
import { mkdir, readdir, rm, stat, writeFile } from "fs/promises";
import path from "path";
import directoriesData from "../directoriesDB.json" with { type: "json" };
import filesData from "../filesDB.json" with { type: "json" };
import userData from "../usersDB.json" with { type: "json" };

const router = express.Router();

router.post("/", async (req, res, next) => {
  const { name, email, password } = req.body;

  const foundUser = userData.find((user) => user.email === email);
  if (foundUser) {
    return res.status(409).json({
      error: "user already exist",
      message: "user already registered",
    });
  }

  const userId = crypto.randomUUID();
  const dirId = crypto.randomUUID();

  directoriesData.push({
    id: dirId,
    name: `root-${email}`,
    userId: userId,
    parentDirId: null,
    files: [],
    directories: [],
  });

  userData.push({
    id: userId,
    name,
    email,
    password,
    rootDirId: dirId,
  });
  try {
    await writeFile("./usersDB.json", JSON.stringify(userData));
    await writeFile("./directoriesDB.json", JSON.stringify(directoriesData));
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error.message);
    error.status = 500;
    next(error);
  }
});

export default router;
