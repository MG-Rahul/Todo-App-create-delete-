/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import style from "./Todo.module.css";

const Todo = ({ todo, handleDeleteTodo }) => {
  let { title, desc, id } = todo;
  const habdledelete = (id) => {
    handleDeleteTodo(id);
  };
  return (
    <article className={style.container}>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <button onClick={() => habdledelete(id)}>
        <i className="fa fa-trash fa-2x"></i>
      </button>
    </article>
  );
};

export default Todo;
