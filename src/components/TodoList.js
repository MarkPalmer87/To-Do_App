// src/components/TodoList.js
// Manages the list of all to-do items, filtering, and mapping them to TodoItem components

// child of the app component

// parent to TodoItem, and AddTodo, receives the list of todos from the Redux store
// and maps over them to render each TodoItem.
// it passes down todo, toggleTodo, and removeTodo props to each TodoItem

import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../redux/actions';
import TodoItem from './TodoItem';

function TodoList() {
  const todos = useSelector((state) => state.todos); // uses useSelector to access the todos array from the Redux store
  const dispatch = useDispatch(); // initialize dispatch, allowing you to dispatch actions to the Redux store

// function to handle toggling the completion status of a task
  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };
// function to handle removing of a task
  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  // Separate (filter) todos into completed and incomplete
  const incompleteTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed); // redunant

// JSX render section
  return (
    <div>
      <div>
        <h2>Incomplete Tasks</h2>
        <ul>
          {incompleteTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={handleToggleTodo}
              removeTodo={handleRemoveTodo}
            />
          ))}
        </ul>
      </div>
      <div>
        <h2>Completed Tasks</h2>
        <ul>
          {completedTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={handleToggleTodo}
              removeTodo={handleRemoveTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
