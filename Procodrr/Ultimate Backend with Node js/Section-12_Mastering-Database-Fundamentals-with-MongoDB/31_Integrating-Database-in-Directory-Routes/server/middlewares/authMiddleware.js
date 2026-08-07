import { ObjectId } from "mongodb";

export default async function checkAuth(req, res, next) {
  const db = req.db;
  const usersCollection = db.collection("users");
  const { uid } = req.cookies;
  const user = await usersCollection.findOne({ _id: new ObjectId(uid) });
  if (!uid || !user) {
    return res.status(401).json({ error: "Not logged!" });
  }
  req.user = user;
  next();
}
