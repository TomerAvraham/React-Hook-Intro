import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ list, toggleTodo, deleteTodo }) => {
  return (
    <div className="todo-list-container">
      {list.map((todo) => (
        <TodoItem
          item={todo}
          key={todo.id}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
