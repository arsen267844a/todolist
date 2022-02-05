import React from "react";

export const ModalFooter = ({ leftButtonText, modalCloseFunc }) => {
  return (
    <div>
      <button>{leftButtonText}</button>
      <button onClick={() => modalCloseFunc("close")}>close</button>
    </div>
  );
};
