import { CHANGE_NAME } from "../actions";

const initialState = {
  name: "test name 55",
};
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: "new name44" };
    default:
      return state;
  }
};
