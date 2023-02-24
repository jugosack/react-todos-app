/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-lone-blocks */
import React, { useState, useRef } from 'react';
import { IoMdAddCircle } from 'react-icons/io';

function InputTodo(props) {
  const [input, setInput] = useState(''); { /* {props.edit ? props.edit.value : ''} */ }
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput('');
  };
  return (
    <form className="todo-form">
      {props.edit ? (
        <>
          <input
            placeholder="Add todo..."
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="input-edit"
          />
          <button type="submit" onClick={handleSubmit} className="edit-button">Update</button>
        </>
      ) : (
        <>
          <input
            placeholder="Add todo..."
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="input-add"
          />
          <button type="submit" onClick={handleSubmit} className="add-button">
            <IoMdAddCircle className="add-circle" />
          </button>
        </>
      )}
    </form>
  );
}

export default InputTodo;
