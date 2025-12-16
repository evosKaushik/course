import React, { useState } from "react";

const About = () => {
  const [todosList, setTodosList] = useState([]);
  return (
    <>
      <h1 className="text-xl">We are Pro coders</h1>
      <button
        onClick={() => {
          import("../data").then((module) => setTodosList(module.todos));
        }}
        className="mt-4 border px-2 shadow-md"
      >
        Load Data
      </button>
      <ul>
        {todosList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
};

export default About;
