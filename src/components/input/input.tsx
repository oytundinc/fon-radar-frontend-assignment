import { InputProps as AntInputProps } from "antd";
import { Rule } from "antd/es/form";
import { InputStyled } from "./input.styles";

interface InputProps extends AntInputProps {
  placeholder: string;
  disable?: boolean;
  layout: "vertical" | "horizontal";
  label?: string;
  rules?: Rule[];
}

export const Input = ({label, rules, ...props }: InputProps) => {
  return (
    <InputStyled {...props} />
  );
};

export default Input;
