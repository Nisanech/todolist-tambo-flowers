// Import dependencies
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsSearch } from "react-icons/bs";

// Import API
import { getAllTodos } from "../../redux/actions/index";
import {ALL_TODOS, DONE_TODOS, ACTIVE_TODOS, DELETE_TODOS} from '../../redux/actions/type'

// Import components
import Todo from "../Todo/Todo";
import Tabs from '../Tabs/Tabs'

// Import styles
import "./Todos.css";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const currentTab = useSelector((state) => state.currentTab)

  useEffect(() => {
    dispatch(getAllTodos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTodos = () => {
    if (currentTab === ALL_TODOS) {
      return todos
    } else if (currentTab === ACTIVE_TODOS) {
      return todos.filter(todo => !todo.done)
    } else if (currentTab === DONE_TODOS) {
      return todos.filter(todo => todo.done)
    } else if (currentTab === DELETE_TODOS) {
      return todos.filter(todo => !todo.visible)
    }
  }

  return (
    <div className="cardList">
      <h1> LISTA DE TAREAS</h1>
      <div>
        <div className="inputSearch">
          <input className="search" type="text" placeholder="Buscar tarea" />
          <BsSearch className="lupaSearch" />
        </div>
        <Tabs currentTab={currentTab}/>
      </div>
      {getTodos().map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
