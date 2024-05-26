/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from "react";

import Todo from "./Todo";
import style from "./Todos.module.css";

const Todos = ({ todos, handleDeleteTodo }) => {
  return (
    <section className={style.container}>
      {todos.map((todo) => {
        return (
          <Todo todo={todo} key={todo.id} handleDeleteTodo={handleDeleteTodo} />
        );
      })}
    </section>
  );
};

export default Todos;
