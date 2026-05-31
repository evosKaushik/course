import express from "express";
import checkAuth from "../middlewares/authMiddleware.js";
import { getAllUsersController } from "../controllers/usersController.js";


const router = express.Router();

router.get("/",checkAuth, getAllUsersController);


export default router;
