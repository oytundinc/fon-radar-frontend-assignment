import styled from "styled-components";

export const DetailCheckStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 8px;
  margin-bottom: 6px;

  font-size: 12px;
  border: 1px solid #f6f6f6;
  .anticon-home {
    font-size: 14px;
    color: #255a88;
  }
  .detail-check-info-title {
    font-weight: 600;
    padding-left: 6px;
  }

  .anticon-check-circle {
    font-size: 14px;
    color: #5cd263;
  }
  .anticon-close-circle {
    font-size: 14px;
    color: red;
  }
`;
