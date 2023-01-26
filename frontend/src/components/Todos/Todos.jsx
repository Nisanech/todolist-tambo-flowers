// Import dependencies
import React, { useEffect } from "react";

// Importar disparador de acciones de Redux y Hook para indicar la tarea seleccionada
import { useDispatch, useSelector } from "react-redux";

// Importar acciones para el consumo de la API
import { getAllTodos } from "../../redux/actions/index";

// Importar el tipo para el filtro de las tareas
import { ALL_TODOS, DONE_TODOS, ACTIVE_TODOS } from "../../redux/actions/type";

// Import components
import Tabs from "../Tabs/Tabs";
import Todo from "../Todo/Todo";

// Import styles
import "./Todos.css";

const Todos = () => {
  // Disparador de acciones del reducer
  const dispatch = useDispatch();

  // Identifica la tarea seleccionada
  const todos = useSelector((state) => state.todos);

  // Tab o filtro actual de las tareas
  const currentTab = useSelector((state) => state.currentTab);

  // Renderiza el componente al cargar todas las tareas que se encuentran en la base de datos
  useEffect(() => {
    // Dispara la acción para obtener todas las tareas
    dispatch(getAllTodos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Función para cargar las tareas de acuerdo al filtro seleccionado
  const getTodos = () => {
    if (currentTab === ALL_TODOS) {
      return todos;
    } else if (currentTab === ACTIVE_TODOS) {
      return todos.filter((todo) => !todo.done);
    } else if (currentTab === DONE_TODOS) {
      return todos.filter((todo) => todo.done);
    }
  };

  return (
    <div className="cardList">
      <h1> LISTA DE TAREAS</h1>

      <div>
        <Tabs currentTab={currentTab} />
      </div>

      {getTodos().map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
