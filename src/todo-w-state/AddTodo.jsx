import React from "react";
import { useState } from "react";


function AddTodo({ todos, setTodo }) {
  const [todoText, setTodoText] = useState("");

  const handleAddTodo = () => {
    if (todoText.trim().length > 0) {
      setTodo((prevTodos) => [
        ...prevTodos,
        { id: todos.length, title: todoText, completed: false },
      ]);
      setTodoText("");
    } else {
      alert("Please add a todo");
    }
  };
  return (
    <div className="flex gap-2 max-w-4xl mt-3">
      <input
        type="text"
        className="p-2 border border-gray-400 focus:border-black transition ease-linear duration-75 rounded w-full outline-none"
        placeholder="Add a todo"
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button
        className="rounded px-3 py-1 bg-black border text-white cursor-pointer"
        onClick={handleAddTodo}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
