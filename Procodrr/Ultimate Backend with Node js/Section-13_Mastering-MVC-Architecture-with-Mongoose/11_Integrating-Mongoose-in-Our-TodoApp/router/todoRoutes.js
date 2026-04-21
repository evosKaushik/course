import express from "express";
import {
  addTodos,
  deleteTodo,
  getAllTodos,
  getTodo,
  updateTodo,
} from "../controllers/todo.controller.js";

const router = express.Router();

router
  .route("/")
  .post(addTodos) // Create a new to-do item
  .get(getAllTodos); // Get all to-do items

router
  .route("/:id")
  .get(getTodo) // Get single to-do item
  .put(updateTodo) // Update a to-do item
  .delete(deleteTodo); // Delete a to-do item

export default router;
