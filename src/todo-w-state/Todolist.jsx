import React, { useState } from "react";
import ShowTodo from "./ShowTodo";
import AddTodo from "./AddTodo";

function Todolist() {
  const [todos, setTodos] = useState([
    { id: 0, title: null, completed: false },
  ]);
  return (
    <>
      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-semibold">Todolist with React State</h1>
        <p className="text-gray-500">
          This todolist app will help you manage your daily tasks
        </p>
        <AddTodo setTodo={setTodos} todos={todos} />
        <ShowTodo todos={todos} setTodos={setTodos} />
      </section>
    </>
  );
}

export default Todolist
