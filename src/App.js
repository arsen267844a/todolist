import { ComponentOne } from "./components/ComponentOne";
import { ComponentTwo } from "./components/ComponentTwo";
import {  useState } from "react";

const initialState = {
  isShow: true,
  age: 45,
};

export const App = () => {
  const [state, setState] = useState(initialState);
  const { isShow, age } = state;

  const func = (value) => {
    if (value === "one") {
      setState((prevState) => ({ ...prevState, isShow: true }));
    } else if (value === "two") {
      setState((prevState) => ({ ...prevState, isShow: false }));
    }
  };
  
  

  return (
    <div>
      {isShow ? <ComponentOne /> : <ComponentTwo />}

      <button onClick={() => func("one")}>one</button>
      <button onClick={() => func("two")}>Two</button>
    </div>
  );
};
