import React, { useState, useEffect } from "react";
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

  const fetchTodos = async () => {
    const res = await axios.get<Todo[]>(config.api + "/todos");
    setTodoList(res.data || []);
  };

  const handleAddTodo = async (title: string) => {
    await axios.post(config.api + "/todos", { title });
    fetchTodos();
  };

  const removeTodo = async (id: string) => {
    await axios.delete(config.api + `/todo/${id}`);
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Header />
      <InputBox onAddTodo={handleAddTodo} />
      {todoList.length > 0 ? (
        <ul>
          {todoList.map((todo) => {
            return (
              <li
                className="todo-item"
                key={todo.id}
                onClick={() => removeTodo(todo.id)}
              >
                <span>{todo.title} </span>
                <span>x</span>
              </li>
            );
          })}
        </ul>
      ) : (
        "loading..."
      )}
    </div>
  );
};

export default App;
