import React from "react";
import Layout from "./Layout";

const Views = ({ todos }) => {
  return (
    <Layout>
      <main>
        <form action="/todos" method="post">
          <input type="text" name="title" required />
          <button>Add Todo</button>
        </form>
        <h1>All Todos</h1>
        <ul>
          {todos.reverse().map(({ title, completed, _id }) => (
            <li key={_id.toString()}>
              <span
                style={{ textDecoration: completed ? "line-through" : "none" }}
              >
                {title}
              </span>
              <button type="button" data-id={_id.toString()} >Delete</button>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
};

export default Views;
