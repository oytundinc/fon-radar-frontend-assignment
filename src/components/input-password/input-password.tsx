import { Form, InputProps as AntInputProps } from "antd";
import { InputPasswordStyled } from "./input-password.styles";

export interface InputPasswordProps extends AntInputProps {
  placeholder: string;
  disable?: boolean;
  label: string;
  layout: "vertical" | "horizontal";
}

export const InputPassword = ({ label, ...props }: InputPasswordProps) => {
  return (
    <Form layout="vertical" className="input-password-container">
      <Form.Item label={label}>
        <InputPasswordStyled {...props} />
      </Form.Item>
    </Form>
  );
};

export default InputPassword;
