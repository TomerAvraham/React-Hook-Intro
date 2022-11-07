import React from "react";

const TodoItemEditBox = ({ inputValue, saveEdit, handleInputChange }) => {
  return (
    <div className="todo-item-edit-container">
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={saveEdit} className="todo-item-edit-save-button">
        Save
      </button>
    </div>
  );
};

export default TodoItemEditBox;
