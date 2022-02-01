import { List } from "./List";
import { ToDoListHeader } from "./ToDoListHeader";
import { useState } from "react";

const initialState = {
  list: [],
};

export const ToDoListPage = () => {
  const [state, setState] = useState(initialState);
  const { list } = state;

  const addFunc = (value) => {
    const listClone = JSON.parse(JSON.stringify(list));
    listClone.push(value);
    setState((prevState) => ({ ...prevState, list: listClone }));
  };

  const del = (value) => {
    const listClone = JSON.parse(JSON.stringify(list));
    listClone.splice(value, 1);
    setState((prevState) => ({ ...prevState, list: listClone }));
  };

  const edit = (value) => {};

  return (
    <div style={{ width: "600px" }}>
      <ToDoListHeader addFunc={addFunc} />
      <List list={list} del={del} edit={edit} />
    </div>
  );
};
