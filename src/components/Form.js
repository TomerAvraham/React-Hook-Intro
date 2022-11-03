import React, { useState } from "react";

const Form = ({ addTodoToTodoList, avi }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  console.log(avi);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) return;
    addTodoToTodoList(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input value={inputValue} onChange={handleInputChange} type="text" />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
