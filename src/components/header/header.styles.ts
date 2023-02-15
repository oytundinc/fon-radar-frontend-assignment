import styled from "styled-components";

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #fff;
  border-bottom: 2px solid #eaeaea;
  
  width: 100%;
  height: 80px;

  .header-logo {
    display: inline-block;

    max-height: 43px;
    height: auto;
  }

  .ant-select {
    position: absolute;
    right: 24px;
  }
`;
