import { Form, InputProps as AntInputProps } from "antd";
import { InputStyled } from "./input.styles";

export interface InputProps extends AntInputProps {
  placeholder: string;
  disable?: boolean;
  label: string;
  layout: "vertical" | "horizontal";
}

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <Form layout="vertical" className="input-container">
      <Form.Item label={label}>
        <InputStyled {...props} />
      </Form.Item>
    </Form>
  );
};

export default Input;
