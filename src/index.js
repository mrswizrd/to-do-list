import React from "react";
import ReactDOM from "react-dom";
import "../src/css/index.css";
import TodoList from "./components/TodoList";

var destination = document.querySelector("#container");

ReactDOM.render(
  <div>
    <TodoList />
  </div>,
  destination
);
