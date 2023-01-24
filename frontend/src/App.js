import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./App.modules.css";
import Todo from './components/Todo'

const BASE_URL = "http://localhost:5000/api";

function App() {
  const [todos, setTodos] = useState(null);
  const [todo, setTodo] = useState("")


  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    axios
      .get(`${BASE_URL}/todos`)
      .then((res) => setTodos(res.data))
      .catch((err) => console.error(err));
  };
  
  const handleAddTodo = () => {
    axios
      .post(`${BASE_URL}/todo/new`, {
        title: todo,
      })
      .then((res) => {
        setTodos([...todos, res.data]);
        setTodo("");
      })
      .catch((err) => console.error(err));
  };


  return (
    <div className="App">
      <div className="todo-input-wrapper">
        <input
          className="todo-input-bar"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Nueva tarea"
        />

        <div className="add-button" onClick={handleAddTodo}>
          +
        </div>
      </div>

      <div className="todos-list">
        {!todos || !todos.length ? (
          <h3 style={{ textAlign: "center" }}>No hay tareas</h3>
        ) : (
          todos.map((todo) => (
            <Todo todo={todo}/>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
