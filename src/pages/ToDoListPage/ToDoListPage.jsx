import { List } from "./List";
import { ToDoListHeader } from "./ToDoListHeader";

export const ToDoListPage = () => {
  const list = [1, 2, 3];

  const addFunc = (value) => {
    console.log(value);
  };

  return (
    <div style={{ width: "600px" }}>
      <ToDoListHeader addFunc={addFunc} />
      <List list={list} />
    </div>
  );
};
