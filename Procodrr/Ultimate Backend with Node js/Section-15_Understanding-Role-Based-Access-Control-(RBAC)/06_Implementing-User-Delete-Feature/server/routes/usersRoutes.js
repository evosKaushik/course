import { Router } from "express";
import checkAuth from "../middlewares/authMiddleware.js";
import {
  deleteUserByUserId,
  getAllUsersController,
  logoutUserByUserId,
} from "../controllers/usersController.js";
import checkAdmin from "../middlewares/adminMiddleware.js";
import { checkManagerMiddleware } from "../middlewares/managerMiddleware.js";

const router = Router();

router.get("/", checkAuth, checkManagerMiddleware, getAllUsersController);
router.post("/:userId", checkAuth, checkManagerMiddleware, logoutUserByUserId);
router.delete("/:userId", checkAuth, checkAdmin, deleteUserByUserId);

export default router;
