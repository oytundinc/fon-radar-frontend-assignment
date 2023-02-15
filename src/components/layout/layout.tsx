import { Layout } from "antd";
import Header from "../header/header";
import { LayoutStyled } from "./layout.styles";

type LayoutProps = {
  children: JSX.Element[] | JSX.Element;
};

function LayoutContainer({ children }: LayoutProps) {
  return (
    <LayoutStyled>
      <Layout>
        <Header />
        {children}
      </Layout>
    </LayoutStyled>
  );
}

export default LayoutContainer;
