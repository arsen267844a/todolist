import React from "react";
import { Styled } from "./List.styled";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../../../store/actions/toDoListActions";

export const List = ({ del, edit }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { list } = state;

  const openModalFunc = () => {
    dispatch(openModal());
  };

  return (
    <Styled.Root>
      {list.map((item, index) => (
        <Styled.Item key={index}>
          <input type={"checkbox"} />
          <p>{item}</p>
          <Styled.EditDel>
            <span onClick={() => edit(item)}>edit</span>
            <span onClick={openModalFunc}>del</span>
          </Styled.EditDel>
        </Styled.Item>
      ))}
    </Styled.Root>
  );
};
