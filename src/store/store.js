import { createStore } from "redux";
import { ToDoListReducer } from "./reducer/ToDoListReducer";

export const Store = createStore(ToDoListReducer);
