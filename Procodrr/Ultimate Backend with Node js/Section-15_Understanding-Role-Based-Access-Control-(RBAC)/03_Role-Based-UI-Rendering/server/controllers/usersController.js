import Session from "../models/sessionModel.js";
import User from "../models/userModel.js";

export const getAllUsersController = async (req, res, next) => {
  try {
    const users = await User.find().select("_id email name").lean();

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
