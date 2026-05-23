import express from "express";
import Course from "../models/Course.js";
import guestMiddleware from "../middleware/guestMiddleware.js";
import Session from "../models/Session.js";

const router = express.Router();

// GET all courses
router.get("/", guestMiddleware, async (req, res) => {
  try {

    
    const courses = await Course.find();

    console.log("cart Item",req.sessionId)
    const cartItem = await Session.find({ sessionId: req.sessionId });

    res.json({courses, cartItem});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
