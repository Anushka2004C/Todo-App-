import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { createStore } from "redux"; // deprecated package use redux-toolkit instead
import { Provider } from "react-redux";
// import { todoReducer } from "./redux/reducers.js";
import { configureStore } from "@reduxjs/toolkit";
import todoReducerRTK from "./redux-toolkit/todoSlice.js";

// const store = createStore(todoReducer);

const toolkitStore = configureStore({
  reducer: {
    todos: todoReducerRTK,
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={toolkitStore}>
      <App />
    </Provider>
  </StrictMode>
);
