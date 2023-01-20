// Import model
const Todo = require("../models/todoModel");

// req = require & res = response
// Obtener tareas
const getTodos = async (req, res) => {
  const todos = await Todo.find();

  res.json(todos);
}; 

// Crear tareas
const createTodo = (req, res) => {
  const todo = new Todo({
    title: req.body.title,
  });

  todo.save();

  res.json(todo); 
};

// Editar tarea
const editTodo = async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body);

  todo.save();

  res.json(todo)
};

// Eliminar tareas
const deleteTodo = async (req, res) => {
  const deletedTodo = await Todo.findByIdAndDelete(
    req.params.id,
    req.body.title
  );

  res.json(deletedTodo);
};

// Tarea completada
const toggleTodoStatus = async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  todo.completed = !todo.completed;
  todo.save();

  res.json(todo);
};

exports.getTodos = getTodos;
exports.createTodo = createTodo;
exports.deleteTodo = deleteTodo;
exports.toggleTodoStatus = toggleTodoStatus;
exports.editTodo = editTodo; 
