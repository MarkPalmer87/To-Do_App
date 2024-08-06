// src/components/AddTodo.js
// Handles adding new tasks to the to-do list

// child of the app component

// child component. child-child communcation
// AddTodo is a sibling component to the list of TodoItems, within ole pappy TodoList
// When AddTodo is used to add a new task, it dispatches an action to the Redux store
// The updated store state causes TodoList to re-render, which in turn
// re-renders all the TodoItem components.

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';  
import { addTodo } from '../redux/actions';  

function AddTodo() { // defines stateless function AddTodo
// local state: inputValue. 
//setInputValue function used to update the state when user inputs change.
//useState(''); initializes inputValue with an empty string.
  const [inputValue, setInputValue] = useState('');  
  const dispatch = useDispatch();  // Initialize dispatch

  const handleSubmit = (e) => {
    e.preventDefault(); // upon hitting submit, dont do the default function of form submit
    if (inputValue.trim()) { // if theres white space, trim it out
      dispatch(addTodo(inputValue));  // Dispatch the addTodo action with the input value
      setInputValue(''); // clear field for next entry after dispatch
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task here"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodo;
