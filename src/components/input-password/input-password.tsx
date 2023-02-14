import { InputProps as AntInputProps } from "antd";
import { Rule } from "antd/es/form";
import { InputPasswordStyled } from "./input-password.styles";

export interface InputPasswordProps extends AntInputProps {
  placeholder: string;
  disable?: boolean;
  layout: "vertical" | "horizontal";
  rules?: Rule[];
}

export const InputPassword = ({...props }: InputPasswordProps) => {
  return (
    <InputPasswordStyled {...props} />
  );
};

export default InputPassword;
