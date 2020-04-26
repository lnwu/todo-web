import React, { useState, FC } from "react";

type InputBoxProps = {
  onAddTodo: (title: string) => void;
};

const InputBox: FC<InputBoxProps> = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");

  return (
    <div className="input-box">
      <h3>请输入你今天要做的事情：</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => onAddTodo(title)}>添加</button>
    </div>
  );
};

export default InputBox;
