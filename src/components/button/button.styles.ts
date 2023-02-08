import styled from "styled-components";
import { Button as AntButton } from "antd";

export const ButtonStyled = styled(AntButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  padding: 20px 0;
  border-radius: 6px;
  border: none;

  background-color: #255a88;
  color: #fff;

  &:hover {
    span {
      color: black;
    }
  }
`;
