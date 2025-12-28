import React from "react";

function ShowTodo({ todos, setTodos }) {
  const realtodos = todos.filter((todo) => todo.title); // filter out todos with no title

  return (
    <div className="max-w-4xl mt-3">
      <p className="text-xl font-bold">All Todos</p>

      {realtodos.map((todo) => (
        <div key={todo.id} className="flex gap-2 items-center">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-500"
            onChange={(e) =>
              setTodos((prevTodos) =>
                prevTodos.map((t) =>
                  t.id === todo.id ? { ...t, completed: e.target.checked } : t,
                ),
              )
            }
            checked={todo.completed}
          />
          <p className="text-gray-500">
            {todo.completed ? <strike>{todo.title}</strike> : todo.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ShowTodo;
