import { Router } from "express";
import checkAuth from "../middlewares/authMiddleware.js";
import {
  getAllUsersController,
  logoutUserByUserId,
} from "../controllers/usersController.js";
import checkAdmin from "../middlewares/adminMiddleware.js";
import { checkManagerMiddleware } from "../middlewares/managerMiddleware.js";

const router = Router();

router.get("/", checkAuth, checkManagerMiddleware, getAllUsersController);
router.post("/:userId", checkAuth, checkManagerMiddleware, logoutUserByUserId);

export default router;
