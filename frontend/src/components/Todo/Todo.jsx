// Import dependencies
import React, { useState } from "react";

// Importar disparador de acciones de Redux
import { useDispatch } from "react-redux";

// Importar acciones para el consumo de la API
import { toggleTodo, updateTodo, deleteTodo } from "../../redux/actions/index";

// Import styles & icons
import { TiEdit, TiTrash, TiInputChecked } from "react-icons/ti";
import "./Todo.css";

// Recibe como prop el todo que hace referencia a la tarea
const Todo = ({ todo }) => {
  // Estado para editar la tarea
  const [editing, setEditing] = useState(false);

  // Estado para el valor del input
  const [text, setText] = useState(todo?.data);

  // Se declara la constante para hacer uso del hook que dispara la acción del reducer
  const dispatch = useDispatch();

  // Función para el envío del formulario al actualizar la tarea
  const onFormSubmit = (e) => {
    // Previene el evento por defecto del elemento
    e.preventDefault();

    // Permite leer el estado previo
    setEditing((prevState) => !prevState);

    // Se dispara la acción del reducer para actualizar la tarea recibiendo el id y la nueva información
    dispatch(updateTodo(todo._id, text));
  };

  return (
    <>
      <li className={todo.done ? "todo-row complete" : "todo-row"}>
        <span style={{ display: editing ? "none" : "" }}>{todo?.data}</span>

        <form
          style={{ display: editing ? "inline" : "none" }}
          onSubmit={onFormSubmit}
        >
          <input
            type="text"
            value={text}
            className="todo-input edit"
            onChange={(e) => setText(e.target.value)}
          />
        </form>

        <div className="icons">
          <span
            className="check-icon"
            onClick={() => dispatch(toggleTodo(todo._id))}
          >
            <TiInputChecked />
          </span>

          <span
            className="edit-icon"
            onClick={() => setEditing((prevState) => !prevState)}
          >
            <TiEdit />
          </span>

          <span
            className="delete-icon"
            onClick={() => dispatch(deleteTodo(todo._id))}
          >
            <TiTrash />
          </span>
        </div>
      </li>
    </>
  );
};

export default Todo;
