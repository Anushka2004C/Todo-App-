import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo } from "../redux-toolkit/todoSlice";

const ShowTodoRedux = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const filteredTodos = todos.filter((todo) => todo.title);

  console.log("Todo from Redux:", todos);

  const handleCompleted = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    dispatch(updateTodo(updatedTodos));
  };

  return (
    <ul className="max-w-4xl mt-3">
      <p className="text-xl font-bold">All Todos</p>
      {filteredTodos.map((todo, index) => (
        <li
          key={index}
          className="flex justify-between items-center border p-2 my-2 rounded border-gray-200 bg-gray-100"
        >
          {todo.completed ? <strike>{todo.title}</strike> : todo.title}
          <button
            className="px-3 py-0.5 bg-green-200 rounded border border-green-400 text-green-600 cursor-pointer hover:bg-green-300 transition ease-linear duration-75"
            onClick={() => handleCompleted(todo.id)}
          >
            {todo.completed ? "Undo" : "Complete"}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ShowTodoRedux;