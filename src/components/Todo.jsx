/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import Header from './Header';
import InputTodo from './InputTodo';
import TodoList from './TodoList';

function Todo() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    setTodos((prev) => prev.map((item) => (item.id === todoId ? newValue : item)));
  };

  const deleteTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <Header />
      <InputTodo onSubmit={addTodo} />
      <TodoList
        todos={todos}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
      />

    </div>
  );
}

export default Todo;
