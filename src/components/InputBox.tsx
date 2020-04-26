import React, { useState, FC } from "react";

type InputBoxProps = {
  onAddTodo: (title: string) => void;
};

const InputBox: FC<InputBoxProps> = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");

  return (
    <div className="input-box">
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
