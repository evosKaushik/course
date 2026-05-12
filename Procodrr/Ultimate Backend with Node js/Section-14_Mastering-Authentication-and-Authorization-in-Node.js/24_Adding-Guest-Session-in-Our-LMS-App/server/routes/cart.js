import express from "express";
import Session from "../models/Session.js";

const router = express.Router();

// GET cart
router.get("/", async (req, res) => {
  //Add your code here
  const sessionId = req.signedCookies.sid;
  try {
    if (!sessionId) {
      return res.status(400).json({ message: "Session not found" });
    }
    const session = await Session.findById(sessionId).populate("courseIds", "name image price").lean();
    if (!session) {
      return res.status(400).json({ message: "Session not found" });
    }
    return res.json({ courseIds: session.courseIds });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Add to cart
router.post("/:courseId", async (req, res) => {
  //Add your code here
  const { courseId } = req.params;

  const sessionId = req.signedCookies.sid;

  if (!sessionId) {
    return res.status(400).json({ message: "Session not found" });
  }

  try {
    const session = await Session.findById(sessionId);
    if (!session) {
      return res.status(400).json({ message: "Session not found" });
    }
    session.courseIds.push(courseId);
    session.markModified("data");
    await session.save();
    return res.json({ message: "Course added to cart" });
  } catch {
    return res.status(500).json({ message: "Internal server error" });
  }
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
