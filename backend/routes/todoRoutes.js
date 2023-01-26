// Se trae el entorno express 
const express = require("express");
//Se utiliza el middleware express.Router para crear manejadores de rutas.
const router = express.Router();

// Traer las funcionalidades del controlador
const {
  addTodo,
  getAllTodos,
  toggleTodoDone,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

// Rutas de consulta 
router.get("/todos", getAllTodos); // Get task
router.post("/todo/new", addTodo); // Create task
router.put("/todo/editTodo/:id", updateTodo); // Edit task
router.get("/todo/toggleStatus/:id", toggleTodoDone); // Completed status
router.get("/todo/toggleDelete/:id", deleteTodo); // Delete task

module.exports = router; //Se exportan todas las rutas 🔝
