import { Form, InputProps as AntInputProps } from "antd";
import { Rule } from "antd/es/form";
import { InputStyled } from "./input.styles";

interface InputProps extends AntInputProps {
  placeholder: string;
  disable?: boolean;
  label: string;
  layout: "vertical" | "horizontal";
  rules?: Rule[];
}

export const Input = ({ label, rules, ...props }: InputProps) => {
  return (
    <Form layout="vertical" className="input-container">
      <Form.Item label={label} rules={[{ required: true, message: 'Please input your username!' }]}>
        <InputStyled {...props} />
      </Form.Item>
    </Form>
  );
};

export default Input;
