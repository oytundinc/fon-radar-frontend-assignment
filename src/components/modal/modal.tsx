import { ReactNode } from "react";
import { ModalStyled } from "./modal.styles";

export type ModalProps = {
  open?: boolean;
  children?: ReactNode;
  closable?: boolean;
  onOK?: () => void;
  onCancel?: () => void;
  title: string;
};

export const Modal = ({
  title,
  children,
  open,
  closable,
  onCancel,
  onOK,
}: ModalProps) => {
  return (
    <ModalStyled
      title={title}
      open={open}
      closable={closable}
      onOK={onOK}
      onCancel={onCancel}
    >
      {children}
    </ModalStyled>
  );
};
