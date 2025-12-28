import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 0,
            title: null,
            completed: false,
        },
    ],
}


const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = action.payload;
        },
    },
});
export const { addTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;