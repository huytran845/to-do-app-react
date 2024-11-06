import { useState } from "react";

export function TodoInput(props) {
  const { addTodo } = props;
  const [inputValue, setInputValue] = useState(""); //Stateful react variable that's an empty string
  return (
    <div className="input-container">
      <input
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        placeholder="Add task"
      ></input>
      <button
        onClick={() => {
          if (!inputValue) {
            return;
          } //Guard clause the protects the input function from accepting empty strings
          addTodo(inputValue);
          setInputValue("");
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
