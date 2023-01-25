// Import dependencies
import React, {useState} from "react";
import {useDispatch} from 'react-redux'

// Import API
import {toggleTodo, updateTodo, deleteTodo} from '../../redux/actions/index'

// Import styles & icons
import { TiEdit, TiTrash, TiInputChecked } from "react-icons/ti";
import './Todo.css'

const Todo = ({todo}) => {
    const [editing, setEditing] = useState(false)
    const [text, setText] = useState(todo?.data)
    const dispatch = useDispatch()

    const onFormSubmit = (e) => {
        e.preventDefault()

        setEditing(prevState => !prevState)

        dispatch(updateTodo(todo._id, text))
    }

  return (
    <>
    <li className={todo.done ? 'todo-row complete' : 'todo-row'} >
        <span style={{ display: editing ? 'none' : ''}}>{todo?.data}</span>

        <form style={{ display: editing ? 'inline' : 'none'}} onSubmit={onFormSubmit}>
            <input type="text" value={text} className='todo-input edit' onChange={(e) => setText(e.target.value)}/>
        </form>

        <div className="icons">
        <span className="check-icon" onClick={() => dispatch(toggleTodo(todo._id))}>
            <TiInputChecked  />
        </span>

        <span className="edit-icon" onClick={() => setEditing(prevState => !prevState)}>
            <TiEdit  />
        </span>

        <span className="delete-icon" onClick={() => dispatch(deleteTodo(todo._id))}>
            <TiTrash  />
        </span>
        </div>
    </li>
    </>
  );
};

export default Todo;
