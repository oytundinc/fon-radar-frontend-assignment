import { Form } from "antd";
import { useTranslation } from "react-i18next";
import { Button } from "../../components/button/button";
import InputPassword from "../../components/input-password/input-password";
import Input from "../../components/input/input";
import LayoutContainer from "../../components/layout/layout";
import { LoginPageWrapped } from "./login-page.styles";
import { useNavigate } from "react-router-dom";
import useUserApi from "../../service/user/user.api";
import { useCallback, useState } from "react";
import { UserData } from "../../service/user/user.model";
import { showErrorNotification } from "../../commons/notification";

export const LoginPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { getAllUsers } = useUserApi();
  const [users, setUsers] = useState<UserData[]>([]);
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const validate = () => {
    if (userName.length === 0 || password.length === 0) {
      return false;
    }
    return true;
  };

  const navigateToCustomerPage = () => {
    if (validate()) {
      if (users === undefined || users.length === 0) {
        fetchData();
      }
      const found = users.find(
        (user: UserData) =>
          userName === user.username && password === user.password
      );
      if (found !== undefined) {
        navigate('/customer-page');
      } else {
        showErrorNotification(t("notification.loginErrorNotification"), 3)
      }
    }
  };

  const fetchData = useCallback(async () => {
    try {
      const response = await getAllUsers();
      setUsers(response.data);
    } catch (error) {}
  }, [getAllUsers]);

  return (
    <LoginPageWrapped className="login-page-wrapped">
      <LayoutContainer>
        <div className="form-container">
          <Form layout="vertical">
            <h3 className="form-title">{t("form.title")}</h3>
            <Form.Item
              label={t("form.emailInputLabel")}
              name={"userName"}
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                placeholder={t("form.emailInputPlaceholder")}
                layout="vertical"
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
              />
            </Form.Item>
            <Form.Item
              label={t("form.passwordInputLabel")}
              name={"password"}
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <InputPassword
                placeholder={t("form.passwordInputPlaceholder")}
                layout="vertical"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                onClick={() => {
                  navigateToCustomerPage();
                }}
              >
                {t("form.loginButtonText")}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </LayoutContainer>
    </LoginPageWrapped>
  );
};
