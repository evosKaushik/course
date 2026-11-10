import { Schema, model, type InferSchemaType } from "mongoose";

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    content: {
      type: String,
      required: [true, "Content is required"],
      trim: true,
    },
  },
  { timestamps: true },
);

export type NoteType = InferSchemaType<typeof noteSchema>;

export const Note = model("Note", noteSchema);
