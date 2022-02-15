import { useDispatch } from "react-redux";
import { closeModal } from "../../../../store/actions/toDoListActions";

export const ModalHeader = ({ children }) => {
  const dispatch = useDispatch();

  const close = () => {
    dispatch(closeModal());
  };
  return (
    <div>
      <span>To {children}</span>
      <button onClick={close}>close</button>
    </div>
  );
};
