export const  ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

export const  addTodo = (id = 0, text = "", completed = false) => ({
  type: ADD_TODO,
  payload:{
    id,
    title,
    completed,
  }
})

export const updateTodo = (todos) => ({
  type:UPDATE_TODO,
  payload: todos,
})