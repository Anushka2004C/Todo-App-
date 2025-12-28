import React from "react";
import Todolist from "./todo-w-state/Todolist";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodolistRedux from "./todo-w-redux/TodolistRedux";
import Home from "../../Global/Home";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/todo-w-state",
      element: <Todolist />,
    },
    {
      path: "/todo-w-redux",
      element: <TodolistRedux />,
    },
  ]);

  return (
    <div className="mt-20 px-5">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
