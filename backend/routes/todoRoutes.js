const express = require("express");
const router = express.Router();

const { getTodos, createTodo, deleteTodo, toggleTodoStatus, editTodo } = require("../controllers/todoController");

router.get("/todos", getTodos);
router.post("/todo/new", createTodo);
router.put('/todo/editTodo/:id', editTodo)
router.delete('/todo/delete/:id', deleteTodo)
router.get('/todo/toggleStatus/:id', toggleTodoStatus)

module.exports = router;
