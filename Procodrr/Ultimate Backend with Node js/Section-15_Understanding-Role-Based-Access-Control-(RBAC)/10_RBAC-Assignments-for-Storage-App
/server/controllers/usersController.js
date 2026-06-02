import { isValidObjectId } from "mongoose";
import Session from "../models/sessionModel.js";
import User from "../models/userModel.js";
import File from "../models/fileModel.js";
import Directory from "../models/directoryModel.js";

export const getAllUsersController = async (req, res, next) => {
  const { email } = req?.user;
  try {
    const users = await User.find({
      $nor: [
        {
          email,
          isDeleted: false,
        },
      ],
    })
      .select("_id email name role")
      .lean();

    const sessions = await Session.find().select("userId").lean();

    const loggedInUsers = new Set(
      sessions.map((session) => session.userId.toString()),
    );

    const usersWithStatus = users.map((user) => ({
      ...user,
      isLoggedIn: loggedInUsers.has(user._id.toString()),
    }));

    return res.status(200).json(usersWithStatus);
  } catch (error) {
    next(error);
  }
};

export const logoutUserByUserId = async (req, res, next) => {
  const { userId } = req?.params;
  if (!userId) return res.status(400).json({ error: "User id not provided" });
  if (!isValidObjectId(userId))
    return res.status(400).json({ error: "Invalid userId" });
  try {
    await Session.deleteMany({ userId });

    return res.status(201).json({ message: "Deleted all the sessions" });
  } catch (error) {
    next(error?.message);
  }
};

export const softDeleteUserByUserId = async (req, res, next) => {
  const { userId } = req?.params;
  if (!userId) return res.status(400).json({ error: "User id not provided" });
  if (!isValidObjectId(userId))
    return res.status(400).json({ error: "Invalid userId" });
  const { _id: senderId } = req?.user;
  if (senderId.toString() === userId)
    return res.status(400).json({ error: "You can't delete your self" });
  try {
    await Session.deleteMany({ userId });
    await User.findByIdAndUpdate(userId, { isDeleted: true });
    await Directory.updateMany({ userId }, { isDeleted: true });
    await File.updateMany({ userId }, { isDeleted: true });
    res.status(201).json({ message: "successfully deleted" });
  } catch (error) {
    next(error);
  }
};
export const hardDeleteUserByUserId = async (req, res, next) => {
  const { userId } = req?.params;
  if (!userId) return res.status(400).json({ error: "User id not provided" });
  if (!isValidObjectId(userId))
    return res.status(400).json({ error: "Invalid userId" });
  const { _id: senderId } = req?.user;
  if (senderId.toString() === userId)
    return res.status(400).json({ error: "You can't delete your self" });
  try {
    await Session.deleteMany({ userId });
    await User.findByIdAndDelete(userId, );
    await Directory.deleteMany({ userId });
    await File.deleteMany({ userId });
    res.status(201).json({ message: "successfully deleted" });
  } catch (error) {
    next(error);
  }
};


