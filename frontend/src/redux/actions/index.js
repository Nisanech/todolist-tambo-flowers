import axios from "axios";
import {ADDNEW_TODO} from './type'

const API_URL = "http://localhost:5000/api";

export const addNewTodo = (title) => async(dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/todo/new`, { title });

    dispatch({type: ADDNEW_TODO, payload: res.title})
  } catch (error) {
    console.log("Error al agregar una nueva tarea", error.message);
  }
};
