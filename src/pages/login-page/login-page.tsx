import { Form } from "antd";
import { useTranslation } from "react-i18next";
import { Button } from "../../components/button/button";
import InputPassword from "../../components/input-password/input-password";
import Input from "../../components/input/input";
import LayoutContainer from "../../components/layout/layout";
import { LoginPageWrapped } from "./login-page.styles";
import { useNavigate } from "react-router-dom";
import useUserApi from "../../service/user/user.api";
import { useCallback, useEffect, useState } from "react";
import { UserData } from "../../service/user/user.model";
import { showErrorNotification } from "../../commons/notification";
import CryptoJS from "crypto-js";

export const LoginPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { getAllUsers } = useUserApi();
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const validate = () => {
    if (userName.length === 0 || password.length === 0) {
      return false;
    }
    return true;
  };

  const checkUserAndNavigateToCustomerPage = (users: UserData[]) => {
    const found = findUser(users);
    if (found) {
      localStorage.setItem("auth", CryptoJS.AES.encrypt(JSON.stringify(userName), "secret").toString());
      navigate("/customer-page");
    } else {
      showErrorNotification(t("notification.loginErrorNotification"), 3);
    }
  };

  const findUser = (users: UserData[]) => {
    return users.find(
      (user: UserData) =>
        userName === user.username && password === user.password
    );
  };

  const login = () => {
    if (validate()) {
      fetchData().then((response) => {
        if (response) {
          checkUserAndNavigateToCustomerPage(response.data);
        } else {
          showErrorNotification(t("notification.loginErrorNotification"));
        }
      });
    }
  };

  const fetchData = useCallback(async () => {
    try {
      return await getAllUsers();
    } catch (error) {}
  }, [getAllUsers]);

  useEffect(() => {
    const authValue = localStorage.getItem("auth");
    if (authValue !== null) {
      const decryptedValue = CryptoJS.AES.decrypt(authValue, "secret");
      if (decryptedValue !== null) {
        navigate("/customer-page");
      }
    }
  }, [navigate]);

  return (
    <LoginPageWrapped className="login-page-wrapped">
      <LayoutContainer>
        <div className="form-container">
          <Form layout="vertical">
            <h3 className="form-title">{t("loginPage.title")}</h3>
            <Form.Item
              label={t("loginPage.emailInputLabel")}
              name={"userName"}
              rules={[
                {
                  required: true,
                  message: t("loginPage.emailInputRequirement") as string,
                },
              ]}
            >
              <Input
                placeholder={t("loginPage.emailInputPlaceholder")}
                layout="vertical"
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
              />
            </Form.Item>
            <Form.Item
              label={t("loginPage.passwordInputLabel")}
              name={"password"}
              rules={[
                {
                  required: true,
                  message: t("loginPage.passwordInputRequirement") as string,
                },
              ]}
            >
              <InputPassword
                placeholder={t("loginPage.passwordInputPlaceholder")}
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
                  login();
                }}
              >
                {t("loginPage.loginButtonText")}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </LayoutContainer>
    </LoginPageWrapped>
  );
};
