import { useDispatch, useSelector } from "react-redux";
import {
  changeInputValue,
  add,
} from "../../../../store/actions/toDoListActions";

export const ToDoListHeader = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { inputValue } = state;

  const inputChange = (value) => {
    dispatch(changeInputValue(value));
  };
  const addFunc = () => {
    dispatch(add());
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => inputChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addFunc()}
      />
      <button onClick={addFunc}>ADD</button>
    </div>
  );
};
