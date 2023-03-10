import styled from "styled-components";

export const DetailFormStyled = styled.div`
  margin: 80px 60px;

  font-size: 6px;
  border-radius: 6px;
  border: 2px solid #255a88;
  .detail-form-header {
    .detail-form-header-title {
      display: flex;
      align-items: center;

      padding: 0 30px;
      font-size: 14px;
      font-weight: 700;
      min-height: 80px;
    }

    .detail-form-button-container {
      display: contents;
      .detail-form-edit-button {
        margin-right: 4px;
        margin-left: 4px;
        padding: 4px 2px;

        max-width: 80px;
        width: 100%;

        span {
          font-size: 12px;
        }
      }
      .detail-form-delete-button {
        padding: 4px 2px;

        max-width: 80px;
        width: 100%;

        span {
          font-size: 12px;
        }
      }
    }

    .ant-col-md-6 {
      display: flex;
      padding: 36px 30px;
      font-size: 14px;
      font-weight: 700;
      min-height: 80px;
    }
  }

  .ant-row {
    .ant-col-md-12 {
      padding: 0px 10px 18px;

      &:last-child {
        height: 100%;
      }
    }
  }
`;
