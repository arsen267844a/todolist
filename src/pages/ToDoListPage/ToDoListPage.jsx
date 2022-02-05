import { List } from "./components/List";
import { ToDoListHeader } from "./components/ToDoListHeader";
import { useState } from "react";
import { ToDoModal } from "../../components/ToDOModal";

const initialState = {
  list: [],
  isOpen: false,
};

export const ToDoListPage = () => {
  const [state, setState] = useState(initialState);
  const { list, isOpen } = state;

  const addFunc = (value) => {
    const listClone = JSON.parse(JSON.stringify(list));
    listClone.push(value);
    setState((prevState) => ({ ...prevState, list: listClone }));
  };

  const handleModal = (value) => {
    if (value === "open") {
      setState((prevState) => ({ ...prevState, isOpen: true }));
    } else if (value === "close") {
      setState((prevState) => ({ ...prevState, isOpen: false }));
    }
  };

  const del = (value) => {
    handleModal("open");

    /*const listClone = JSON.parse(JSON.stringify(list));
    listClone.splice(value, 1);
    setState((prevState) => ({ ...prevState, list: listClone }));*/
  };

  const edit = (value) => {};

  return (
    <div style={{ width: "600px" }}>
      <ToDoModal isOpen={isOpen} handleModal={handleModal} />
      <ToDoListHeader addFunc={addFunc} />
      <List list={list} del={del} edit={edit} />
    </div>
  );
};
