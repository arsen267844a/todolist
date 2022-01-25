import { ComponentOne } from "./components/ComponentOne";
import { ComponentTwo } from "./components/ComponentTwo";
import { useState } from "react";

const initialState = {
  isShow: true,
};

export const App = () => {
  const [state, setState] = useState(initialState);
  const { isShow } = state;

  const func = (value) => {};

  return (
    <div>
      <ComponentOne />
      <ComponentTwo />
      <button onClick={() => func("one")}>one</button>
      <button onClick={() => func("two")}>Two</button>
    </div>
  );
};
