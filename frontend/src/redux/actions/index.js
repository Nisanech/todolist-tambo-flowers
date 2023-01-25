// Importamos la dependencia Axios para hacer los llamados a la API
import axios from "axios";

// Importamos las variables definidas en el archivo type
import {
  ADDNEW_TODO,
  GETALL_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TOGGLE_TAB,
} from "./type";

// URL desde donde se hará el consumo de la API
const API_URL = "http://localhost:5000/api";

// Función para agregar una nueva tarea
//? Párametros: data -> Información de la tarea / dispatch -> Para disparar la acción desde el componente
export const addNewTodo = (data) => async (dispatch) => {
  try {
    // Acceso a la ruta de la API que ejecuta la función de una nueva tarea desde el controlador, junto con el valor del data
    const res = await axios.post(`${API_URL}/todo/new`, { data });

    // Se referencia el tipo de acción y los datos que recibe
    dispatch({ type: ADDNEW_TODO, payload: res.data });
  } catch (error) {
    // Se captura el error en caso de que no se pueda agregar la tarea
    console.log("Error al agregar una nueva tarea", error.message);
  }
};

// Función para obtener todas las tareas
export const getAllTodos = () => async (dispatch) => {
  try {
    // Acceso a la ruta de la API que ejecuta la función de listar todas las tareas
    const res = await axios.get(`${API_URL}/todos`);

    // Se referencia el tipo de acción y los datos que recibe
    dispatch({ type: GETALL_TODO, payload: res.data });
  } catch (error) {
    // Se captura el error en caso de que no se puedan obtener las tareas
    console.log("Error al cargar las tareas", error.message);
  }
};

// Función para cambiar el estado de la tarea a completada recibe como párametro el id de la tarea
export const toggleTodo = (id) => async (dispatch) => {
  try {
    // Acceso a la ruta de la API que ejecuta la función de listar todas las tareas
    const res = await axios.get(`${API_URL}/todo/toggleStatus/${id}`);

    // Se referencia el tipo de acción y los datos que recibe
    dispatch({ type: TOGGLE_TODO, payload: res.data });
  } catch (error) {
    // Se captura el error en caso de que no se pueda completar la tarea
    console.log("Error al completar la tarea", error.message);
  }
};

// Función para actualizar la tarea, recibe como párametro el id y la información de la tarea
export const updateTodo = (id, data) => async (dispatch) => {
  try {
    // Acceso a la ruta de la API que ejecuta la función de actualizar la tarea
    const res = await axios.put(`${API_URL}/todo/editTodo/${id}`, { data });

    // Se referencia el tipo de acción y los datos que recibe
    dispatch({ type: UPDATE_TODO, payload: res.data });
  } catch (error) {
    // Se captura el error en caso de que no se pueda actualizar la tarea
    console.log("Error al editar la tarea", error.message);
  }
};

// Función para eliminar la tarea, recibe como párametro el Id de la tarea
export const deleteTodo = (id) => async (dispatch) => {
  try {
    // Acceso a la ruta de la API que ejecuta la función de eliminar la tarea
    const res = await axios.get(`${API_URL}/todo/toggleDelete/${id}`);

    // Se referencia el tipo de acción y los datos que recibe
    dispatch({ type: DELETE_TODO, payload: res.data });
  } catch (error) {
    // Se captura el error en caso de que no se pueda eliminar la tarea
    console.log("Error al eliminar la tarea", error.message);
  }
};

// Función para filtrar las tareas
export const toggleTab = (tab) => async (dispatch) => {
  // Se referencia el tipo de acción y los datos que recibe
  dispatch({ type: TOGGLE_TAB, selected: tab });
};
