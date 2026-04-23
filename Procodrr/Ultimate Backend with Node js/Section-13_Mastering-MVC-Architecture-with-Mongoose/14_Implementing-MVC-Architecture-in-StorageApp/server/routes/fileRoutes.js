import express from "express";

import validateIdMiddleware from "../middlewares/validateIdMiddleware.js";
import {
  createFile,
  deleteFile,
  getFileById,
  renameFile,
} from "../controllers/file.controller.js";

const router = express.Router();

router.param("parentDirId", validateIdMiddleware);
router.param("id", validateIdMiddleware);

router.post("/:parentDirId?", createFile);

router.get("/:id", getFileById);

router.patch("/:id", renameFile);

router.delete("/:id", deleteFile);

export default router;
