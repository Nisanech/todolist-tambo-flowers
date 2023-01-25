// Import model
// const { response } = require("express");
const Todo = require("../models/todoModel");

// Create task
const addTodo = async (request, response) => {
  try {
    const newTodo = await Todo.create({
      data: request.body.data,
    });

    await newTodo.save();

    return response.status(200).json(newTodo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

// Get all tasks
const getAllTodos = async (request, response) => {
  try {
    const todos = await Todo.find({visible: true});

    return response.status(200).json(todos);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

// Completed task
const toggleTodoDone = async (request, response) => {
  try {
    const todoRef = await Todo.findById(request.params.id);

    const todo = await Todo.findOneAndUpdate(
      { _id: request.params.id },
      { done: !todoRef.done }
    );

    await todo.save();

    return response.status(200).json(todo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

// Edit task
const updateTodo = async (request, response) => {
  try {
    await Todo.findOneAndUpdate(
      { _id: request.params.id },
      { data: request.body.data }
    );

    const todo = await Todo.findById(request.params.id);

    return response.status(200).json(todo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

// Delete task
const deleteTodo = async (request, response) => {
  try {
    const todoRef = await Todo.findById(request.params.id);

    const todo = await Todo.findOneAndUpdate(
      { _id: request.params.id },
      { visible: !todoRef.visible }
    );

    await todo.save();

    return response.status(200).json(todo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

exports.getAllTodos = getAllTodos;
exports.addTodo = addTodo;
exports.updateTodo = updateTodo;
exports.toggleTodoDone = toggleTodoDone;
exports.deleteTodo = deleteTodo;
