// src/redux/reducer.js
// Contains the root reducer that manages the state of the app based on dispatched actions

import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actions';

const initialState = {
  todos: []
};

function rootReducer(state = initialState, action) {
  console.log('Reducer called with action:', action); // Debugging: Check actions
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        )
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
}

export default rootReducer;
