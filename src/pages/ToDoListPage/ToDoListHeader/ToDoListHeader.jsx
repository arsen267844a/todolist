import { useState } from "react";

const initialState = {
  inputValue: "",
};

export const ToDoListHeader = ({ addFunc }) => {
  const [state, setState] = useState(initialState);
  const { inputValue } = state;

  const inputChange = (value) => {
    setState((prevState) => ({ ...prevState, inputValue: value }));
  };

  return (
    <div>
      <input onChange={(e) => inputChange(e.target.value)} />
      <button onClick={() => addFunc("inputValue")}>ADD</button>
    </div>
  );
};
