// Import express
const express = require('express')
const router = express.Router()

// Get functionality from controller
const {getTodos, createTodo, editTodo, toggleTodoStatus, toggleTodoDelete} = require('../controllers/todoController')

// Routes for the API
router.get("/todos", getTodos) // Get task
router.post("/todo/new", createTodo) // Create task
router.put("/todo/editTodo/:id", editTodo) // Edit task
router.get('/todo/toggleStatus/:id', toggleTodoStatus) // Completed status
router.get('/todo/toggleDelete/:id', toggleTodoDelete) // Delete task

module.exports = router;
