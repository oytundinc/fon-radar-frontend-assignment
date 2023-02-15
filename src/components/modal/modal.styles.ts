import styled from "styled-components";
import { Modal as AntModal } from "antd";
import { ModalProps } from "./modal";

export const ModalStyled = styled(AntModal)<ModalProps>`
  .ant-modal-content {
    .ant-modal-body {
      padding-bottom: 4px;

        .ant-form-item-label {
            padding-left: 4px;
        }
        .ant-form-item-control {}

        .ant-form-item {
          margin-bottom: 4px;
        }
    }
  }
`;
