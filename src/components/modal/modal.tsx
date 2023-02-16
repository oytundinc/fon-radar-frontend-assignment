import { ReactNode } from "react";
import { ModalStyled } from "./modal.styles";

export type ModalProps = {
  open?: boolean;
  children?: ReactNode;
  closable?: boolean;
  onOk?: () => void;
  onCancel?: () => void;
  title: string;
  okText: string;
  cancelText: string;
};

export const Modal = ({
  title,
  children,
  open,
  closable,
  onCancel,
  onOk,
  okText,
  cancelText,
}: ModalProps) => {
  return (
    <ModalStyled
      title={title}
      open={open}
      closable={closable}
      onOk={onOk}
      onCancel={onCancel}
      okText={okText}
      cancelText={cancelText}
    >
      {children}
    </ModalStyled>
  );
};
