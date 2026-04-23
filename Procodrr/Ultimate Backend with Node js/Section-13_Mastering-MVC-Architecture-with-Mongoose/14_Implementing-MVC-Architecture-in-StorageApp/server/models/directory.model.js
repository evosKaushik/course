import { model, Schema } from "mongoose";

const directorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      description: "Name of the directory is required",
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      description: "User ID is required",
    },
    parentDirId: {
      type: Schema.Types.ObjectId,
      default: null,
      ref: "Directory",
      description: "Parent directory ID is optional",
    },
  },
  {
    strict: "throw",
  },
);

const Directory = model("Directory", directorySchema);

export default Directory;
