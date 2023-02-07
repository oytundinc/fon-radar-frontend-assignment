import styled from "styled-components";

export const LoginPageWrapped = styled.div`
  &.login-page-wrapped {
    display: flex;
    justify-content: center;

    .login-page {
      width: 100%;
      max-width: 500px;

      padding: 20px;
      border: 1px solid #255a88;
      border-radius: 10px;

      .login-page-header {
        margin: 12px 0px;
        text-align: initial;

        font-size: 24px;
        font-weight: 700;
        color: #202020;
      }
    }
  }
`;
