// src/components/TodoItem.js
// Represents individual tasks, with functions to mark as complete, edit, or remove tasks. 

// child component of TodoList. When a user removes or toggles a task, the respective callback functions
// (toggleTodo, and removeTodo) passed down from TodoList. 
// These callback functions dispatch actions to update the Redux store
// which triggers a re-rendering of the TodoList with the updated state

// child to parent communication.
// child, notifies parent, of event change.
// when the user interacts with items on the list, the component can call functions passed down
// from the parent component 

import React from 'react';

function TodoItem({ todo, toggleTodo, removeTodo }) { // props passed down from parent component (TodoList)
  console.log('TodoItem props:', { todo, toggleTodo, removeTodo }); // Debugging: Check props

  // Debugging: Check if toggleTodo is a function
  console.log('toggleTodo type:', typeof toggleTodo);

  return (
    <li className={todo.completed ? 'completed' : 'incomplete'}> {/*classname is conditionally set to completed IF todo.completed is true, otherwise incomplete */}
      <label> {/*a clickable wrapper grouping input, and text */}
        <input
          type="checkbox"
          checked={todo.completed} // the checked attribute is controlled by todo.completed. reflects if it is marked completed
          onChange={() => toggleTodo(todo.id)} 
        />
        {todo.text} {/*displays the text of the todo item */}
      </label>
      <button className="remove" onClick={() => removeTodo(todo.id)}>Remove</button>
    </li>
  );
}

export default TodoItem;
