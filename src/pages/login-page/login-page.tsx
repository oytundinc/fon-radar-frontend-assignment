import { Form } from "antd";
import { Button } from "../../components/button/button";
import InputPassword from "../../components/input-password/input-password";
import Input from "../../components/input/input";
import { LoginPageWrapped } from "./login-page.styles";

export const LoginPage = () => {
  return (
    <LoginPageWrapped className="login-page-wrapped">
      <Form className="login-page">
        <h3 className="login-page-header">Kullanıcı Girişi</h3>
        <Input label="E-posta Adresi" placeholder="Email" layout="vertical" />
        <InputPassword label="Şifre" placeholder="Şifre" layout="vertical" />
        <Button>Giriş Yap</Button>
      </Form>
    </LoginPageWrapped>
  );
};
