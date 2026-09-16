
import {isValidObjectId} from "mongoose"

export default function (req, res, next, id) {
  if (!isValidObjectId(id)) {
    return res.status(400).json({ error: `Invalid ID: ${id}` });
  }
  next();
}
