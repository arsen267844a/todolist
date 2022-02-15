import { useDispatch } from "react-redux";
import { closeModal } from "../../../../store/actions/toDoListActions";

export const ModalFooter = ({ children }) => {
  const dispatch = useDispatch();

  const close = () => {
    dispatch(closeModal());
  };

  return (
    <div>
      <button>{children}</button>
      <button onClick={close}>close</button>
    </div>
  );
};
