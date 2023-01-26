// Importar dependencies para crear el context de la aplicación haciendo uso de Redux
import { createStore, combineReducers, applyMiddleware } from "redux";

// Importar thunk para retrasar el envío de una acción hasta que se cumpla una línea de código asíncrona
import thunk from "redux-thunk";

// Extensión para ver el estado de Redux en consola
import { composeWithDevTools } from "redux-devtools-extension";

// Importamos los reducers para el context de las tareas y los filtros
import { todosReducers } from "./reducers/todosReducer";
import { tabReducer } from "./reducers/tabReducer";

// Objeto donde indicamos en una propiedad el valor de los reducers
const reducer = combineReducers({
  todos: todosReducers,
  currentTab: tabReducer,
});

// Llamadas de la API
const middleware = [thunk];

// Crea el store necesario para el uso del context con Redux
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
