// Import express
const express = require("express");
const router = express.Router();

// Get functionality from controller
const {
  addTodo,
  getAllTodos,
  toggleTodoDone,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

// Routes for the API
router.get("/todos", getAllTodos); // Get task
router.post("/todo/new", addTodo); // Create task
router.put("/todo/editTodo/:id", updateTodo); // Edit task
router.get("/todo/toggleStatus/:id", toggleTodoDone); // Completed status
router.get("/todo/toggleDelete/:id", deleteTodo); // Delete task

module.exports = router;
