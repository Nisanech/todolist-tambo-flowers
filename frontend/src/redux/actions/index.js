import axios from "axios";
import { ADDNEW_TODO, GETALL_TODO, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO, TOGGLE_TAB } from "./type";

const API_URL = "http://localhost:5000/api";

export const addNewTodo = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/todo/new`, { data });

    dispatch({ type: ADDNEW_TODO, payload: res.data });
  } catch (error) {
    console.log("Error al agregar una nueva tarea", error.message);
  }
};

export const getAllTodos = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todos`);

    dispatch({ type: GETALL_TODO, payload: res.data });
  } catch (error) {
    console.log("Error al cargar las tareas", error.message);
  }
};

export const toggleTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todo/toggleStatus/${id}`);

    dispatch({ type: TOGGLE_TODO, payload: res.data });
  } catch (error) {
    console.log("Error al completar la tarea", error.message);
  }
};

export const updateTodo = (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(`${API_URL}/todo/editTodo/${id}`, {data});

    dispatch({ type: UPDATE_TODO, payload: res.data });
  } catch (error) {
    console.log("Error al editar la tarea", error.message);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/todo/toggleDelete/${id}`);

    dispatch({type: DELETE_TODO, payload: res.data})
  } catch (error) {
    console.log("Error al eliminar la tarea", error.message);
  }
}

export const toggleTab = (tab) => async (dispatch) => {
  dispatch({type: TOGGLE_TAB, selected: tab})
}