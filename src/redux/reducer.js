import { ADD_TODO, UPDATE_TODO } from "./action"




const initialState =  {
  todos: [{
    id:0,
    title:null,
    complete:false
  }]
}


export const todoReducer = (state = initialState,action) => {
  switch(action.type) {
    case ADD_TODO:
      return{
        ...state,
        todos: [...state.todos, action.payload]

      }
      case UPDATE_TODO:
        return{
          ...state,
          todos: action.payload
        }
        default:
          return state;
  }
}