/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import Todos from "./Todos";
import NewAddTodo from "./NewAddTodo";
import style from "./Home.module.css";

const Home = () => {
  const [todos, setTodos] = useState([]);

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    //console.log(id);
  };
  const NewAddTodos = (todo) => {
    console.log(todo);
    setTodos((prevTodos) => [...prevTodos, todo]);
  };
  return (
    <div className={style.container}>
      <NewAddTodo NewAddTodo={NewAddTodos} />
      <Todos todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </div>
  );
};

export default Home;
