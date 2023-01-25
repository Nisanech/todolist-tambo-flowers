// Import dependencies
import React, { useState } from "react";

// Importar disparador de acciones de Redux
import { useDispatch } from "react-redux";

// Importar acciones para el consumo de la API
import { addNewTodo } from "../../redux/actions/index";

// Import styles
import "./TodoForm.css";

const TodoForm = () => {
  // Estado para el valor del input
  const [text, setText] = useState("");

  // Se declara la constante para hacer uso del hook que dispara la acción del reducer
  const dispatch = useDispatch();

  // Función para enviar el formulario al agregar una nueva tarea
  const onFormSubmit = (e) => {
    // Previene el evento por defecto del elemento
    e.preventDefault();

    // Se dispara la acción del reducer para agregar la tarea recibiendo la información o nombre de la tarea
    dispatch(addNewTodo(text));

    // Valor por defecto del estado
    setText("");
  };

  // Evento para capturar cuando el valor del input cambie
  const onInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="cardAdd">
        <h1>AÑADIR TAREA</h1>

        <form className="todo-form" onSubmit={onFormSubmit}>
          <input
            placeholder="Añadir a lista de tareas"
            className="todo-input"
            onChange={onInputChange}
            value={text}
            type="text"
          />
          <button className="todo-button" onClick={onFormSubmit}>
            Agregar
          </button>
        </form>
      </div>
    </>
  );
};

export default TodoForm;
