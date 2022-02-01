import { useHistory } from "react-router";

export const HomePage = () => {
  const history = useHistory();

  const func = (value) => {
    history.push(value);
  };

  return (
    <div>
      <h1>Home</h1>
      <h2 onClick={() => func("/todolist")} style={{ cursor: "pointer" }}>
        todolist
      </h2>
    </div>
  );
};
