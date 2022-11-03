import React, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./style/global.css";
import { v4 as uuid } from "uuid";

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: uuid(), task: "Code some React", isCompleted: false },
    { id: uuid(), task: "Eat a lot of food", isCompleted: true },
    { id: uuid(), task: "Drink 2 bottles of Arak", isCompleted: false },
  ]);

  const addTodoToTodoList = (todo) => {
    const newTodo = {
      id: uuid(),
      task: todo,
      isCompleted: false,
    };
    setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
  };

  const toggleTodoCompleted = (id) => {
    const todoListCopy = [...todoList];
    const indexByTodoId = todoListCopy.findIndex((todo) => todo.id === id);
    console.log(indexByTodoId);
    const targetTodo = todoListCopy[indexByTodoId];
    todoListCopy[indexByTodoId] = {
      ...targetTodo,
      isCompleted: !targetTodo.isCompleted,
    };
    setTodoList(todoListCopy);
  };

  return (
    <div className="app-container">
      <Form addTodoToTodoList={addTodoToTodoList} />
      <TodoList list={todoList} toggleTodo={toggleTodoCompleted} />
    </div>
  );
};

export default App;
