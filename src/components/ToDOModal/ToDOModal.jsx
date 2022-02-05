import { Styled } from "./ToDOModal.styled";
import Modal from "react-modal";
import { ModalHeader } from "./components/ModalHeader";
import { ModalFooter } from "./components/ModalFooter";

export const ToDoModal = ({ isOpen, handleModal }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <ModalHeader modalTitle={"test text"} modalCloseFunc={handleModal} />
      <h1>body</h1>
      <ModalFooter modalCloseFunc={handleModal} />
    </Modal>
  );
};
