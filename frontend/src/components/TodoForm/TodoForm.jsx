// Import dependencies
import React, { useState } from "react";
import { useDispatch } from "react-redux";

// Import API
import { addNewTodo } from "../../redux/actions/index";

// Import styles
import "./TodoForm.css";

const TodoForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  // Función para enviar el formulario
  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(addNewTodo(text));

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
