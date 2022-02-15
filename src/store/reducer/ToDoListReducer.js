import {
  ADD,
  CHANGE_INPUT_VALUE,
  CLOSE_MODAL,
  OPEN_MODAL,
} from "../actions/toDoListActions";

const initialState = {
  isOpenModal: false,
  inputValue: "",
  list: [],
};

export const ToDoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return { ...state, inputValue: action.payload };

    case ADD:
      const cloneState = JSON.parse(JSON.stringify(state));
      const { list, inputValue } = cloneState;
      list.push(inputValue);
      return { ...state, list, inputValue: "" };

    case OPEN_MODAL:
      return { ...state, isOpenModal: true };

    case CLOSE_MODAL:
      return { ...state, isOpenModal: false };

    default:
      return state;
  }
};
