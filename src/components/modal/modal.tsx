import { ReactNode } from "react";
import { ModalStyled } from "./modal.styles";

export type ModalProps = {
  open?: boolean;
  children?: ReactNode;
  closable?: boolean;
  onOK?: () => void;
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
  onOK,
  okText,
  cancelText,
}: ModalProps) => {
  return (
    <ModalStyled
      title={title}
      open={open}
      closable={closable}
      onOK={onOK}
      onCancel={onCancel}
      okText={okText}
      cancelText={cancelText}
    >
      {children}
    </ModalStyled>
  );
};
