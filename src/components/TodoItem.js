import React from "react";

const TodoItem = ({ item, toggleTodo }) => {
  return (
    <div className="todo-item-container">
      <span style={{ textDecoration: item.isCompleted ? "line-through" : "" }}>
        {item.task}
      </span>
      <input
        type="checkbox"
        onChange={() => toggleTodo(item.id)}
        checked={item.isCompleted}
      />
    </div>
  );
};

export default TodoItem;
