// Import dependencies
import React from "react";

// Import components
import Header from "./components/Header/Header";
import TodoForm from './components/TodoForm/TodoForm'
import Todos from './components/Todos/Todos'
import Footer from "./components/Footer/Footer";

// Import styles
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <TodoForm/>
      <Todos/>
      <Footer />
    </>
  );
}

export default App;
