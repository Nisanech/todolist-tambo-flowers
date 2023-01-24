// Se importa el documento donde se almacena el modelo 
const Todo = require("../models/todoModel");


//Funciones de lógica para las tareas, crear modificar, eliminar. 

// Get all tasks
const getTodos = async (req, res) => {
  const todos = await Todo.find(); //Método find para mostrar los elementos dentro de Todo (variable que almacena el modelo)
  res.json(todos);//Se mete el resultado dentro de un json 
};

// Create task
const createTodo = (req, res) => {
  const todo = new Todo({
    title: req.body.title,
  });
  todo.save();
  res.json(todo);
};

// Edit task
const editTodo = async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body);//Metodo para encontrar por id y actualizar  req.params.id (requier el elemento)
  todo.save();
  res.json(todo);
};

// Completed task
const toggleTodoStatus = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.completed = !todo.completed;
  todo.save();
  res.json(todo);
};

// Delete task
const toggleTodoDelete = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.visible = !todo.visible;
  todo.save();
  res.json(todo);
};

exports.getTodos = getTodos;
exports.createTodo = createTodo;
exports.editTodo = editTodo;
exports.toggleTodoStatus = toggleTodoStatus;
exports.toggleTodoDelete = toggleTodoDelete;
