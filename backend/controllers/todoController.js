// Se importa el modelo. 
const Todo = require("../models/todoModel");

// Funcion para agregar tareas. 
const addTodo = async (request, response) => { //Parametros de requisito y respuesta
  //Try and catch para hacer el proceso y capturar errores
  try {
    //Metodo para crear una propiedad dentro de la BD.
    const newTodo = await Todo.create({ 
      data: request.body.data,// Propiedad donde se guarda la información o nombre de la tarea
    });

    // Método para guardar la información en la base de datos
    await newTodo.save();

    // Retorna el estado 200 si la petición se creo de manera correcta
    return response.status(200).json(newTodo);
  } catch (error) {
    // Retorna el estado 500 si hay un error en el envío de la petición
    return response.status(500).json(error.message);
  }
};

// Traer todas las tareas
const getAllTodos = async (request, response) => {
  try {
    // Se obtienen los datos con el método find donde se indica que solo muestre las tareas cuya propiedad visible sea true
    const todos = await Todo.find({ visible: true });

    // Retorna el estado 200 si la petición se creo de manera correcta
    return response.status(200).json(todos);
  } catch (error) {
    // Retorna el estado 500 si hay un error en el envío de la petición
    return response.status(500).send("Error");
  }
};

// tarea completada
const toggleTodoDone = async (request, response) => {
  try {
    // Se ejecuta el método findById para buscar la tarea por el id seleccionado
    const todoRef = await Todo.findById(request.params.id);

    // Al retornar un id único se actualiza esa tarea con el método findOneAndUpdate y se cambia la propiedad done a true para indicar que la tarea esta completa.
    const todo = await Todo.findOneAndUpdate(
      { _id: request.params.id },
      { done: !todoRef.done }
    );

    // Método para guardar la información en la base de datos en el campo de id especificado
    await todo.save();

    // Retorna el estado 200 si la petición se creo de manera correcta
    return response.status(200).json(todo);
  } catch (error) {
    // Retorna el estado 500 si hay un error en el envío de la petición
    return response.status(500).json(error.message);
  }
};

// Editar tarea
const updateTodo = async (request, response) => {
  try {
    // Se actualiza la tarea con el método findOneAndUpdate y se cambia la propiedad data con la nueva información.
    await Todo.findOneAndUpdate(
      { _id: request.params.id },
      { data: request.body.data }
    );

    // Se ejecuta el método findById para buscar la tarea por el id seleccionado
    const todo = await Todo.findById(request.params.id);

    // Retorna el estado 200 si la petición se creo de manera correcta
    return response.status(200).json(todo);
  } catch (error) {
    // Retorna el estado 500 si hay un error en el envío de la petición
    return response.status(500).json(error.message);
  }
};

// Delete task
const deleteTodo = async (request, response) => {
  try {
    // Se ejecuta el método findById para buscar la tarea por el id seleccionado
    const todoRef = await Todo.findById(request.params.id);

    // Al retornar un id único se actualiza esa tarea con el método findOneAndUpdate y se cambia la propiedad visible a false para indicar que la tarea fue eliminada.
    const todo = await Todo.findOneAndUpdate(
      { _id: request.params.id },
      { visible: !todoRef.visible }
    );

    // Método para guardar la información en la base de datos
    await todo.save();

    // Retorna el estado 200 si la petición se creo de manera correcta
    return response.status(200).json(todo);
  } catch (error) {
    // Retorna el estado 500 si hay un error en el envío de la petición
    return response.status(500).json(error.message);
  }
};

// Se exportan todas las funciones del controlador, que hacen parte del CRUD
exports.getAllTodos = getAllTodos;
exports.addTodo = addTodo;
exports.updateTodo = updateTodo;
exports.toggleTodoDone = toggleTodoDone;
exports.deleteTodo = deleteTodo;
