import { buffer } from "node:stream/consumers";
import User from "../models/userModel.js";
import crypto from "node:crypto";
import Session from "../models/sessionModel.js";

export default async function checkAuth(req, res, next) {
  const { sid } = req.signedCookies;

  
  if (!sid) {
    res.clearCookie("sid");
    return res.status(401).json({ error: "Not logged in!" });
  }

  const session = await Session.findById(sid).lean();

  if(!session){
    return res.status(401).json({error: "Token expired"})
  }

  const user = await User.findById(session.userId).lean();
  
  if (!user) {
    return res.status(401).json({ error: "Not logged in!" });
  }
  req.user = user;
  req.sessionId = sid
  next();
}
