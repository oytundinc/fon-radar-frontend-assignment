import WrappedSelect from "../../components/select/select";
import { HeaderStyled } from "./header.styles";

export const Header = () => {
  return (
    <HeaderStyled>
      <div className="logo-container">
        <img
          src="https://www.fonradar.com/wp-content/uploads/2020/05/logo-2x.png"
          alt="Logo"
          className="header-logo"
        />
      </div>
      <WrappedSelect />
    </HeaderStyled>
  );
};

export default Header;
