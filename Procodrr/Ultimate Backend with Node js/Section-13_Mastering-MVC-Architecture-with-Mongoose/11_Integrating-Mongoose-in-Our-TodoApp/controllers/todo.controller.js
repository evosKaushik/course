import { ObjectId } from "mongodb";
import Todo from "../models/todo.model.js";

const addTodos = async (req, res) => {
  const todo = req.body;
  try {
    const insertedTodo = await Todo.insertOne(todo);

    // res.status(201).json(insertedTodo)
    res.redirect("/todos");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create todo" });
  }
};

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    // res.status(200).json(todos);

    res.render("index.jsx", { todos });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
};

const getTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todos = await Todo.findByIdAndDelete(id);
    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch todos" });
  }
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const updatedTodo = req.body;
  try {
    const result = await Todo.findByIdAndUpdate(
      id,
      { $set: updatedTodo },
      { new: true }
    );
    if (!result) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.status(200).json({ message: "Todo updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update todo" });
  }
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Todo.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete todo" });
  }
};

export { addTodos, getAllTodos, getTodo, updateTodo, deleteTodo };
