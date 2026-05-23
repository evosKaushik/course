import express from "express";
import guestMiddleware from "../middleware/guestMiddleware.js";
import Session from "../models/Session.js";

const router = express.Router();

// GET cart
router.get("/", async (req, res) => {
  //Add your code here
});

// Add to cart
router.post("/:courseId", guestMiddleware, async (req, res) => {
  const { courseId } = req.params;
  const { sessionId } = req;

  console.log(sessionId)

  const session = await Session.create({
    sessionId,
  });

  session.courseIds.push(courseId);

  await session.save();

  res.json({
    message: "Course added to cart successfully",
  });
});

// Remove course from cart
router.delete("/:courseId", async (req, res) => {
  //Add your code here
});

// Clear cart
router.delete("/", async (req, res) => {
  //Add your code here
});

export default router;
