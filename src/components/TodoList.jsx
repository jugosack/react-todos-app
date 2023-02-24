/* eslint-disable react/prop-types */
/* eslint-disable  react/no-array-index-key */
import React, { useState } from 'react';
import { AiTwotoneEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { GrCheckbox } from 'react-icons/gr';
import InputTodo from './InputTodo';

function TodoList({
  todos, updateTodo, deleteTodo,
}) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });
  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };
  if (edit.id) {
    return <InputTodo edit={edit} onSubmit={submitUpdate} />;
  }
  return (
    <div>
      {todos.map((todo, index) => (
        <>
          <div className={todo.isComplete ? 'todo-complete' : 'todo-container'} key={index}>
            <GrCheckbox className="checkbox" />
            <div key={todo.id}>
              {todo.text}
            </div>
            <div className="icons">
              <AiTwotoneEdit
                onClick={() => setEdit({ id: todo.id, value: todo.text })}
                className="edit-icon"
              />
              <MdDelete
                onClick={() => deleteTodo(todo.id)}
                className="delete-icon"
              />
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default TodoList;
