import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { BsSearch } from "react-icons/bs";
import "../App.css";
import Swal from 'react-sweetalert2';



function TodoList() {
 const showAlert=()=>{
  alert('si')
 }

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

  return (
    <>
      <h1>AÑADIR TAREA</h1>
      <TodoForm onSubmit={addTodo} />
      <h1> Lista de tareas</h1>
      <div>
        <input className="search" type="text" placeholder="Buscar tarea" />
        <BsSearch
        /* onClick={() => removeTodo(todo.id)}
                    className='delete-icon' */
        />
         <button onClick={{showAlert}}>
            Open
        </button>
      </div>
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
