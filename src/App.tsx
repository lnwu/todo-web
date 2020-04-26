import React, { useState } from "react";
import "./App.css";
import { produce } from "immer";
import { useConfig } from "./hooks/useConfig";

type Todo = {
  id: string;
  title: string;
};

const App = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const config = useConfig();

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
        <p>当前环境: {config.env}</p>
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
