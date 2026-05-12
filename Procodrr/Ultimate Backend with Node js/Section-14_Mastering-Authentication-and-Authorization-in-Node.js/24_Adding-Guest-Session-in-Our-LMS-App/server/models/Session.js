import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
  courseIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  expires: { type: Number, default: Math.round(Date.now() / 1000 + 60 * 60) },
});

const Session = mongoose.model("Session", sessionSchema);

export default Session;
