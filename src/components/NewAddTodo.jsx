/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import style from "./NewTodo.module.css";
const NewAddTodo = ({ NewAddTodo }) => {
  const [todo, setTodo] = useState({
    title: "",
    desc: "",
    id: new Date().getTime().toString(),
  });
  const handleTodo = (e) => {
    setTodo({ ...todo, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(todo);
    NewAddTodo(todo);
    setTodo({
      title: "",
      desc: "",
      id: new Date().getTime().toString(),
    });
  };
  return (
    <div className={style.container}>
      <h1>New Todo Add</h1>
      {/* title, desc  */}
      <form onSubmit={handleSubmit}>
        <div className={style["form-field"]}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="name"
            id="title"
            value={todo.title}
            onChange={(e) => handleTodo(e)}
            required
          />
        </div>
        <div className={style["form-field"]}>
          <label htmlFor="desc">Description: </label>
          <textarea
            type="text"
            name="desc"
            id="desc"
            value={todo.desc}
            onChange={handleTodo}
            required
          />
        </div>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default NewAddTodo;
