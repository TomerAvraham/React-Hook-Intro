import React from "react";

const TodoItem = ({ item, toggleTodo, deleteTodo }) => {
  return (
    <div className="todo-item-container">
      <span style={{ textDecoration: item.isCompleted ? "line-through" : "" }}>
        {item.task}
      </span>
      <div>
        <input
          type="checkbox"
          onChange={() => toggleTodo(item.id)}
          checked={item.isCompleted}
        />
        <button
          onClick={() => deleteTodo(item.id)}
          className="todo-item-delete-button"
        >
          x
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
