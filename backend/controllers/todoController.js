// Import model
const Todo = require("../models/todoModel");

// req = require & res = response
// Obtener tareas
const getTodos = async (req, res) => {
  const todos = await Todo.find({ visible: true });

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
// Delete task
const toggleTodoDelete = async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  todo.visible = !todo.visible;

  todo.save();

  res.json(todo);
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
exports.toggleTodoDelete = toggleTodoDelete;
exports.toggleTodoStatus = toggleTodoStatus;
exports.editTodo = editTodo; 
