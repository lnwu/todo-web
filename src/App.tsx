import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { produce } from "immer";

type Todo = {
  id: string;
  title: string;
};

const App = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    const newTodoList = produce(todoList, (draft) => {
      draft.push({
        id: Math.random().toString(),
        title: newTodo,
      });
    });

    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>当前环境: {process.env.REACT_APP_STAGE}</p>
        <div>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={handleAddTodo}>添加</button>
        </div>
        {todoList.length > 0 && (
          <ul>
            {todoList.map((todo) => {
              return <li key={todo.id}>{todo.title}</li>;
            })}
          </ul>
        )}
      </header>
    </div>
  );
};

export default App;
