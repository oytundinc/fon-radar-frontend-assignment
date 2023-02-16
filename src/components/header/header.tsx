import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import LanguageSelect from "../../widgets/language-select/language-select";
import { Button } from "../button/button";
import { HeaderStyled } from "./header.styles";

export const Header = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <HeaderStyled>
      <div className="logo-container">
        <img
          src="https://www.fonradar.com/wp-content/uploads/2020/05/logo-2x.png"
          alt="Fon-Radar-Logo"
          className="header-logo"
        />
      </div>
      <LanguageSelect />
      {localStorage.getItem("auth") !== null && (
        <Button
          onClick={() => {
            logout();
          }}
        >
          {t("header.logOutButton")}
        </Button>
      )}
    </HeaderStyled>
  );
};

export default Header;
