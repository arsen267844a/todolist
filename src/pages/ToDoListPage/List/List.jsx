import React from "react";
import { Styled } from "./List.styled";

export const List = ({ list }) => {
  return (
    <Styled.Root>
      {list.map((item, index) => (
        <Styled.Item key={index}>
          <input type={"checkbox"} />
          <p>{item}</p>
          <Styled.EditDel>
            <span>edit</span>
            <span>del</span>
          </Styled.EditDel>
        </Styled.Item>
      ))}
    </Styled.Root>
  );
};
