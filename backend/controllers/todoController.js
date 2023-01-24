// Import model
// const { response } = require("express");
const Todo = require("../models/todoModel");

// req = require & res = response

// Get all tasks
const getTodos = async (req, res) => {
  const todos = await Todo.find();

  res.json(todos);
};

// Create task
const createTodo = async (request, response) => {
  try {
    const newTodo = await Todo.create({
      title: request.body.title,
    })

    await newTodo.save()

    return response.status(200).json(newTodo)
  } catch (error) {
    return response.status(500).json(error.message)
  }
};

// Edit task
const editTodo = async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body);

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
