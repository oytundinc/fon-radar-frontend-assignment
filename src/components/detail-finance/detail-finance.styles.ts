import styled from "styled-components";

export const DetailFinanceStyled = styled.div`
  padding-top: 8px;
  font-size: 12px;

  .detail-finance-title {
    display: flex;
    padding-bottom: 4px;
    
    font-weight: 600;
  }

  .detail-finance-data {
    display: flex;
    justify-content: space-between;
    max-width: 280px;
    padding: 6px;

    background-color: #f4f4f4;
    border-radius: 4px;

    .detail-information-title {
      font-size: 10px;
    }
  }
`;
