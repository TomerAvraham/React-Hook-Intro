import React, { useState } from "react";

const Form = ({ addTodoToTodoList, toggleAllTodo }) => {
  const [inputValue, setInputValue] = useState("");
  const [isCompleteAll, setCompleteAll] = useState(true);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) return;
    addTodoToTodoList(inputValue);
    setInputValue("");
  };

  const handleToggleAll = () => {
    toggleAllTodo(isCompleteAll);
    setCompleteAll((prev) => !prev);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input value={inputValue} onChange={handleInputChange} type="text" />
      <button type="submit">Add</button>
      <button onClick={handleToggleAll} style={{ width: "80px" }}>
        {isCompleteAll ? "Complete All" : "UnComplete All"}
      </button>
    </form>
  );
};

export default Form;
