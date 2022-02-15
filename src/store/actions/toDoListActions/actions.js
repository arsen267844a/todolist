export const CHANGE_INPUT_VALUE = "CHANGE_INPUT_VALUE";
export const ADD = "ADD";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const changeInputValue = (payload) => {
  return { type: CHANGE_INPUT_VALUE, payload };
};

export const add = () => {
  return { type: ADD };
};

export const openModal = () => {
  return { type: OPEN_MODAL };
};

export const closeModal = () => {
  return { type: CLOSE_MODAL };
};
