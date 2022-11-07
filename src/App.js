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

  const editTodoByIdAndTask = (id, task) => {
    const todoListCopy = [...todoList];
    const indexByTodoId = todoListCopy.findIndex((todo) => todo.id === id);
    const todoToEdit = todoListCopy[indexByTodoId];
    todoListCopy[indexByTodoId] = {
      ...todoToEdit,
      task,
    };
    setTodoList(todoListCopy);
  };

  const addTodoToTodoList = (todo) => {
    const newTodo = {
      id: uuid(),
      task: todo,
      isCompleted: false,
    };
    setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
  };

  const toggleAllTodoCompleted = (status) => {
    const newTodoList = todoList.map((todo) => ({
      ...todo,
      isCompleted: status,
    }));
    setTodoList(newTodoList);
  };

  const toggleTodoCompleted = (id) => {
    const todoListCopy = [...todoList];
    const indexByTodoId = todoListCopy.findIndex((todo) => todo.id === id);
    const targetTodo = todoListCopy[indexByTodoId];
    todoListCopy[indexByTodoId] = {
      ...targetTodo,
      isCompleted: !targetTodo.isCompleted,
    };
    setTodoList(todoListCopy);
  };

  const deleteTodoById = (id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-container">
      <Form
        addTodoToTodoList={addTodoToTodoList}
        toggleAllTodo={toggleAllTodoCompleted}
      />
      <TodoList
        list={todoList}
        toggleTodo={toggleTodoCompleted}
        deleteTodo={deleteTodoById}
        editTodo={editTodoByIdAndTask}
      />
    </div>
  );
};

export default App;
