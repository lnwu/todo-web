import React, { useState, useEffect, useCallback } from "react";
import "@lnwu/normalize.css";
import "./App.css";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import { useConfig } from "./hooks/useConfig";
import axios from "axios";

type Todo = {
  id: string;
  title: string;
};

const App = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const config = useConfig();

  const handleAddTodo = (title: string) => {
    axios.post(config.api + "/todos", { title });
  };

  const fetchTodos = useCallback(async () => {
    const res = await axios.get<Todo[]>(config.api + "/todos");
    setTodoList(res.data);
  }, [config.api]);

  useEffect(() => {
    fetchTodos();
  });

  return (
    <div className="App">
      <Header />
      <InputBox onAddTodo={handleAddTodo} />
      {todoList.length > 0 ? (
        <ul>
          {todoList.map((todo) => {
            return <li key={todo.id}>{todo.title}</li>;
          })}
        </ul>
      ) : (
        "loading..."
      )}
    </div>
  );
};

export default App;
