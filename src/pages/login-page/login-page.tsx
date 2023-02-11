import { Form } from "antd";
import { useTranslation } from "react-i18next";
import { Button } from "../../components/button/button";
import InputPassword from "../../components/input-password/input-password";
import Input from "../../components/input/input";
import LayoutContainer from "../../components/layout/layout";
import { LoginPageWrapped } from "./login-page.styles";
import { useNavigate } from "react-router-dom";


export const LoginPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate()
  const login = () => {navigate('/search-page')}

  return (
    <LoginPageWrapped className="login-page-wrapped">
      <LayoutContainer>
        <Form className="login-page">
          <h3 className="login-page-header">{t("loginPage.header")}</h3>
          <Input
            label={t("loginPage.inputLabel")}
            placeholder={t("loginPage.inputPlaceholder")}
            layout="vertical"
          />
          <InputPassword
            label={t("loginPage.passwordInputLabel")}
            placeholder={t("loginPage.passwordInputPlaceholder")}
            layout="vertical"
          />
          <Button onClick={()=>{login()}}>{t("loginPage.button")}</Button>
        </Form>
      </LayoutContainer>
    </LoginPageWrapped>
  );
};
