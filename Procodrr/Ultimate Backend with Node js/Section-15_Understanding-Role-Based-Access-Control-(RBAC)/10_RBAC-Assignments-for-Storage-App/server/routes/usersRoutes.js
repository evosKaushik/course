import { Router } from "express";
import checkAuth from "../middlewares/authMiddleware.js";
import {
  softDeleteUserByUserId,
  hardDeleteUserByUserId,
  getAllUsersController,
  logoutUserByUserId,
} from "../controllers/usersController.js";
import checkAdmin from "../middlewares/adminMiddleware.js";
import { checkManagerMiddleware } from "../middlewares/managerMiddleware.js";

const router = Router();

router.get("/", checkAuth, checkManagerMiddleware, getAllUsersController);
router.post("/:userId", checkAuth, checkManagerMiddleware, logoutUserByUserId);
router.delete("/:userId", checkAuth, checkAdmin, softDeleteUserByUserId);
router.delete("/:userId/hard", checkAuth, checkAdmin, hardDeleteUserByUserId);

export default router;
