import React from "react";

export const ModalHeader = ({ modalTitle, modalCloseFunc }) => {
  return (
    <div>
      <span>To {modalTitle}</span>
      <button onClick={() => modalCloseFunc("close")}>close</button>
    </div>
  );
};
