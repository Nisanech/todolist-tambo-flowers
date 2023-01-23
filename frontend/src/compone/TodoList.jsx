import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { BsSearch } from "react-icons/bs";
import "../App.css";
import Swal from "sweetalert2";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const popUp = () => {
    Swal.fire({
      html:
        "<h1> HISTORIAL DE TAREAS</h1>" +
        "<button> TODAS </button> " +
        "<button>REALIZADAS </button> " +
        "<button>ELIMINADAS </button>"+
        "<ul><li>Tarea 1</li><li>Tarea 2</li><li>Tarea 3</li></ul>",
    });
  };

  return (
    <>
      <div className="cardAdd">
        <h1>AÑADIR TAREA</h1>
        <TodoForm onSubmit={addTodo} />
      </div>
      <div className="cardList">
        <h1> LISTA DE TAREAS</h1>
        <div>
          <div className="inputSearch">
            <input className="search" type="text" placeholder="Buscar tarea" />
            <BsSearch className="lupaSearch" onClick={() => popUp()} /> 
            {/* A este boton se le debe pasar la funcion de buscar la tarea en la lista actual */}
          </div>
          <button className="buttonHistorial" onClick={() => popUp()}>
            {/* Adentro de la función popUp se va a hacer el filtro de las tareas que reposan en la base de datos */}
            <h2> Ver historial de tareas</h2>
          </button>
        </div>
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
      </div>
    </>
  );
}

export default TodoList;
