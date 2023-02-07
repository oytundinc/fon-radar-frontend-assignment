import React from "react";
import { WrappedHeaderStyled } from "./header.styles";

export const Header = () => {
  return (
    <WrappedHeaderStyled>
      <img
        src="https://www.fonradar.com/wp-content/uploads/2020/05/logo-2x.png"
        alt="Logo"
        className="header-logo"
      />
    </WrappedHeaderStyled>
  );
};

export const HeaderLogo = React.memo(Header);
