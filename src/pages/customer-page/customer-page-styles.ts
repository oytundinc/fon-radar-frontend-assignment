import styled from "styled-components";

export const CustomerPageWrapped = styled.div`
  &.customer-page-wrapped {
    width: 70%;
    .customer-page {
      margin-top: 20px;
      padding: 20px;
      border: 1px solid #255a88;
      border-radius: 10px;

      .customer-page-header {
        display: flex;
        justify-content: space-between;
        padding-bottom: 10px;
        .customer-page-header-title {
          margin: 0px 0px 4px 0px;
          text-align: initial;

          font-size: 24px;
          font-weight: 700;
          color: #202020;
        }

        .costumer-page-new-customer-button {
          margin-block: auto;
          width: auto;
          padding: 0px 4px;
        }
      }
    }
  }
`;
