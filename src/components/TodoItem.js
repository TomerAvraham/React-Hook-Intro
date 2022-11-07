import React, { useState } from "react";
import TodoItemEditBox from "./TodoItemEditBox";

const TodoItem = ({ item, toggleTodo, deleteTodo, editTodo }) => {
  const [isEdit, setEdit] = useState(false);
  const [editInputValue, setEditInputValue] = useState(item.task);

  const handleEditTodo = () => {
    setEdit((prev) => !prev);
  };

  const handleEditInputChange = (event) => {
    setEditInputValue(event.target.value);
  };

  const handleSaveEditClick = () => {
    editTodo(item.id, editInputValue);
    setEdit(false);
  };

  return (
    <>
      <div className="todo-item-container">
        <span
          style={{ textDecoration: item.isCompleted ? "line-through" : "" }}
        >
          {item.task}
        </span>
        <div>
          <input
            type="checkbox"
            onChange={() => toggleTodo(item.id)}
            checked={item.isCompleted}
          />
          <button onClick={handleEditTodo} className="todo-item-edit-button">
            Edit
          </button>
          <button
            onClick={() => deleteTodo(item.id)}
            className="todo-item-delete-button"
          >
            x
          </button>
        </div>
      </div>
      {isEdit && (
        <TodoItemEditBox
          inputValue={editInputValue}
          saveEdit={handleSaveEditClick}
          handleInputChange={handleEditInputChange}
        />
      )}
    </>
  );
};

export default TodoItem;
