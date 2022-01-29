import { List } from "./List";
import { ToDoListHeader } from "./ToDoListHeader";
import { useState } from 'react'

const initialState = {
  list: [],
};

export const ToDoListPage = () => {
  const [state,setState] = useState(initialState)
  const {list} = state

  const addFunc = (value) => {
    setState(prevState => ({... prevState, list:  }))
    console.log(value);
  };

  return (
    <div style={{ width: "600px" }}>
      <ToDoListHeader addFunc={addFunc} />
      <List list={list} />
    </div>
  );
};
