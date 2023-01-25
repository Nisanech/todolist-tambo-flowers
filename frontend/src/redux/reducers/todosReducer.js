// Importamos las variables definidas en el archivo type
import * as actionTypes from "../actions/type";

// Función para manejar el estado actual de la aplicación y la acción a realizar y devuelver un nuevo estado, sin modificar directamente el estado actual.
//? Recibe como párametros el estado y la acción
export const todosReducers = (state = [], action) => {
  // Se crear un switch case para las acciones que se pueden hacer en la aplicación. Recibe como párametro la acción y el tipo de acción
  switch (action.type) {
    // Agregar tarea
    case actionTypes.ADDNEW_TODO:
      return [action.payload, ...state];

    // Obtener todas las tareas
    case actionTypes.GETALL_TODO:
      return action.payload;

    // Cambiar el estado de la tarea a completa
    case actionTypes.TOGGLE_TODO:
      return state.map((todo) =>
        todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
      );

    // Actualizar la tarea
    case actionTypes.UPDATE_TODO:
      return state.map((todo) =>
        todo._id === action.payload._id
          ? { ...todo, data: action.payload.data }
          : todo
      );

    // Eliminar la tarea
    case actionTypes.DELETE_TODO:
      return state.filter((todo) => todo._id !== action.payload._id);

    // Valor por default
    default:
      return state;
  }
};
