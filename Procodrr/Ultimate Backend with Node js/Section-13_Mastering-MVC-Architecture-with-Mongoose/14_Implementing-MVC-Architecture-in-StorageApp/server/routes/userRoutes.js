import express from "express";
import checkAuth from "../middlewares/authMiddleware.js";

import { createUser, getUser, loginUser, logoutUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", createUser);

router.post("/login", loginUser);

router.get("/", checkAuth, getUser);

router.post("/logout", logoutUser);

export default router;
