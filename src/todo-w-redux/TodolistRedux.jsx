import React from "react";
import AddTodoRedux from "./AddTodoRedux";
import ShowTodoRedux from "./ShowTodoRedux";

function TodolistRedux() {
  return (
    <section className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-semibold">Todolist with Redux</h1>
      <p className="text-gray-500">
        This todolist app will help you manage your daily tasks
      </p>
      <AddTodoRedux />
      <ShowTodoRedux />
    </section>
  );
}

export default TodolistRedux;