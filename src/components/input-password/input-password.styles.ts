import styled from "styled-components";
import { Input as AntInput } from "antd";

export const InputPasswordStyled = styled(AntInput.Password)`
  font-size: 16px;
  font-weight: 300;

  .input-password-container {
    .ant-form-item-label {
      font-size: 200px;
    }
  }
`;
