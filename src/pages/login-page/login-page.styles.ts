import styled from "styled-components";

export const LoginPageWrapped = styled.div`
  &.login-page-wrapped {
    width: 100%;
    max-width: 500px;

    .form-container {
      margin-top: 100px;
      padding: 20px;
      border: 1px solid #255a88;
      border-radius: 10px;

      .form-title {
        margin: 12px 0px;
        padding-left: 4px;
        text-align: initial;

        font-size: 20px;
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
