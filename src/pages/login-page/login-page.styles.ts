import styled from "styled-components";

export const LoginPageWrapped = styled.div`
  &.login-page-wrapped {
    .form-container {
      width: 100%;
      max-width: 500px;

      margin-top: 120px;
      padding: 20px;
      border: 1px solid #255a88;
      border-radius: 10px;

      .form-title {
        margin: 12px 0px;
        text-align: initial;

        font-size: 24px;
        font-weight: 700;
        color: #202020;
      }

      .ant-form-item {
        margin-bottom: 12px;
        .ant-form-item-label {
          padding-left: 4px;
        }
        .ant-form-item-control {
          .ant-form-item-explain-error {
            float: left;
            padding-left: 4px;
          }
        }
      }
    }
  }
`;
