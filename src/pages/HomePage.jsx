import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

export const HomePage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state);

  const func = (value) => {};

  return (
    <div>
      <h1>Home</h1>
      <h2>state name` {name}</h2>
      <h2 onClick={() => func("/todolist")} style={{ cursor: "pointer" }}>
        todolist
      </h2>
    </div>
  );
};
