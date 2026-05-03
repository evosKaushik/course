import { ObjectId } from "mongodb";
import User from "../models/userModel.js";

export default async function checkAuth(req, res, next) {
  const { uid } = req.cookies;
  const db = req.db;
  if (!uid) {
    return res.status(401).json({ error: "Not logged!" });
  }
  const expiryTimeInSeconds = parseInt(uid.substr(24, 32), 16);
  const currentTimeInSeconds = Math.round(Date.now() / 1000);
  if (currentTimeInSeconds > expiryTimeInSeconds) {
    res.clearCookie("uid");
    res.status(204).end();
  }
  const user = await User.findById(uid.substr(0, 24)).lean();
  if (!user) {
    return res.status(401).json({ error: "Not logged!" });
  }
  req.user = user;
  next();
}
