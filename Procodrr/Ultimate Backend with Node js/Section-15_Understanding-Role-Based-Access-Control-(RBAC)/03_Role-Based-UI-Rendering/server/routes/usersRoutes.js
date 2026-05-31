import { Router } from "express";
import checkAuth from "../middlewares/authMiddleware.js";
import { getAllUsersController } from "../controllers/usersController.js";
import checkAdmin from "../middlewares/adminMiddleware.js";

const router = Router();

router.get("/", checkAuth, checkAdmin, getAllUsersController);

export default router;
