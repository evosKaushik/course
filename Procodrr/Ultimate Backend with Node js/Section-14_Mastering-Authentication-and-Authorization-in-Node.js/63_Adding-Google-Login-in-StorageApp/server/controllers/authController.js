import mongoose, { Types } from "mongoose";
import OTP from "../models/otpModel.js";
import User from "../models/userModel.js";
import Directory from "../models/directoryModel.js";
import Session from "../models/sessionModel.js";

import { sendOtpService } from "../services/sendOtpService.js";
import { verifyIdToken } from "../services/googleAuthService.js";

export const sendOtp = async (req, res, next) => {
  const { email } = req.body;
  const resData = await sendOtpService(email);
  res.status(201).json(resData);
};

export const verifyOtp = async (req, res, next) => {
  const { email, otp } = req.body;
  const otpRecord = await OTP.findOne({ email, otp });

  if (!otpRecord) {
    return res.status(400).json({ error: "Invalid or Expired OTP!" });
  }

  return res.json({ message: "OTP Verified!" });
};

export const loginWithGoogle = async (req, res, next) => {
  const { idToken } = req.body;
  const userData = await verifyIdToken(idToken?.credential);
  const { email, name, picture, sub } = userData;

  const existingUser = await User.findOne({ email }).select("-__v").lean();

  if (existingUser) {
    const allSessions = await Session.find({ userId: existingUser.id });

    if (allSessions.length >= 2) {
      await allSessions[0].deleteOne();
    }

    const session = await Session.create({ userId: existingUser._id });

    res.cookie("sid", session.id, {
      httpOnly: true,
      signed: true,
      maxAge: 60 * 1000 * 60 * 24 * 7,
    });
    res.json({ message: "logged in", user: existingUser });
  } else {
    const mongooseSession = await mongoose.startSession();

    try {
      const rootDirId = new Types.ObjectId();
      const userId = new Types.ObjectId();

      mongooseSession.startTransaction();

      await Directory.insertOne(
        {
          _id: rootDirId,
          name: `root-${email}`,
          parentDirId: null,
          userId,
        },
        { session: mongooseSession },
      );

      const newUser = await User.insertOne(
        {
          _id: userId,
          name,
          email,
          picture,
          rootDirId,
        },
        { session: mongooseSession },
      );

      const allSessions = await Session.find({ userId: newUser?._id });

      if (allSessions.length >= 2) {
        await allSessions[0].deleteOne();
      }

      const session = await Session.create({ userId: newUser?._id });

      res.cookie("sid", session.id, {
        httpOnly: true,
        signed: true,
        maxAge: 60 * 1000 * 60 * 24 * 7,
      });
      mongooseSession.commitTransaction();
      res.json({ message: "logged in", user: existingUser });
    } catch (err) {
      mongooseSession.abortTransaction();
      next(err);
    }
  }
};
