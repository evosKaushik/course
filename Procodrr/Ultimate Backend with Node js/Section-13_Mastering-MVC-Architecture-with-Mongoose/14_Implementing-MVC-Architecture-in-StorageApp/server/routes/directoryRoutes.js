import express from "express";
import { rm } from "fs/promises";
import { ObjectId } from "mongodb";
import validateIdMiddleware from "../middlewares/validateIdMiddleware.js";
import {
  createDirectory,
  deleteDirectoryById,
  getDirectoryById,
  renameDirectory,
} from "../controllers/directory.controller.js";

const router = express.Router();

router.param("parentDirId", validateIdMiddleware);
router.param("id", validateIdMiddleware);

router.get("/:id?", getDirectoryById);

router.post("/:parentDirId?", createDirectory);

// router.patch("/:id", renameDirectory);

// router.delete("/:id", deleteDirectoryById);

router.route("/:id").patch(renameDirectory).delete(deleteDirectoryById);

export default router;
