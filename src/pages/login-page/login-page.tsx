import { Form } from "antd";
import { useTranslation } from "react-i18next";
import { Button } from "../../components/button/button";
import InputPassword from "../../components/input-password/input-password";
import Input from "../../components/input/input";
import LayoutContainer from "../../components/layout/layout";
import { LoginPageWrapped } from "./login-page.styles";

export const LoginPage = () => {
  const { t } = useTranslation();

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
          <Button>{t("loginPage.button")}</Button>
        </Form>
      </LayoutContainer>
    </LoginPageWrapped>
  );
};
