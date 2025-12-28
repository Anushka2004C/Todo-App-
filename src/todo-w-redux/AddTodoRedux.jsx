import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux-toolkit/todoSlice";

const AddTodoRedux = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const handleAdd = () => {
    if (input.trim() === "") return alert("Please enter a todo");
    dispatch(addTodo({ id: todos.length, title: input, completed: false }));
    setInput("");
  };

  return (
    <div className="max-w-4xl mt-3">
      <input
        type="text"
        className="p-2 border border-gray-400 focus:border-black transition ease-linear duration-75 rounded w-full outline-none"
        placeholder="Add a todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleAdd}
        className="px-3 py-1 bg-black text-white rounded mt-2 cursor-pointer hover:bg-gray-800 transition ease-linear duration-75"
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodoRedux;
