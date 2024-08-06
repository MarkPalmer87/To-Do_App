import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../redux/actions';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

function Home() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onToggleTodo={handleToggleTodo} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
}

export default Home;
