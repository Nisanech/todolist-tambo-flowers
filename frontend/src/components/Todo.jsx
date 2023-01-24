import React, {useState, useRef, useEffect} from 'react'
import axios from "axios";
const BASE_URL = "http://localhost:5000/api";

const Todo = ({todo}) => {
  const [todos, setTodos] = useState(null);
  const span = useRef(null)

  useEffect(() => {
    getTodos();
  }, []);

  const handleTodoClick = (id) => {
    axios
      .get(`${BASE_URL}/todo/toggleStatus/${id}`)
      .then((res) => getTodos())
      .catch((err) => console.error(err));
  };

  const getTodos = () => {
    axios
      .get(`${BASE_URL}/todos`)
      .then((res) => setTodos(res.data))
      .catch((err) => console.error(err));
  };

  const handleEditTodo = (id) => {
    span.current.contentEditable = true;
    window.getSelection().selectAllChildren(span.current);
    window.getSelection().collapseToEnd();
    span.current.focus()

    // console.log(span.current)
  }

  const handleTodoDeleteClick = (id) => {
    axios
      .get(`${BASE_URL}/todo/toggleDelete/${id}`)
      .then((res) => getTodos())
      .catch((err) => console.error(err));
  };

  return (
    <>
    <div className="todo" key={todo._id}>
              <span
                onClick={() => handleTodoClick(todo._id)}
                className={todo.completed ? "complete" : ""}
                id="todo-title"
                ref={span}
                onKeyDown={e => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    span.current.contentEditable = false;

                    axios
                      .put(`${BASE_URL}/todo/editTodo/${todo._id}`, {
                        title: span.current.textContent,
                      })
                      .then((res) => getTodos())
                      .catch((err) => console.error(err));
                  }
                }}
                onBlur={ () => {
                  span.current.contentEditable = false;

                    axios
                      .put(`${BASE_URL}/todo/editTodo/${todo._id}`, {
                        title: span.current.textContent,
                      })
                      .then((res) => getTodos())
                      .catch((err) => console.error(err))
                }}
              >
                {todo.title}
              </span>

              <span
                className="delete"
                onClick={() => handleTodoDeleteClick(todo._id)}
              >
                -
              </span>

              <span className="edit" onClick={() => handleEditTodo(todo._id)}>
                E
              </span>
            </div>
    </>
  )
}

export default Todo