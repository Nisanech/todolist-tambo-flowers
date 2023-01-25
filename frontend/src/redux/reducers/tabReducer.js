// Importamos las variables definidas en el archivo type
import * as actionTypes from "../actions/type";

// Función para manejar el estado actual de acuerdo al filtro seleccionado. Por defecto se mostrarán todas las tareas
//? Recibe como párametros el estado y la acción
export const tabReducer = (state = actionTypes.ALL_TODOS, action) => {
  // Se crear un switch case para los filtros definidos en la aplicación
  switch (action.type) {
    // Filtro seleccionado
    case actionTypes.TOGGLE_TAB:
      return action.selected;

    // Valor por default
    default:
      return state;
  }
};
