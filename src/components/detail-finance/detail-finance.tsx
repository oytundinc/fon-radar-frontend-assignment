import DetailInformation from "../detail-information/detail-information";
import { DetailFinanceStyled } from "./detail-finance.styles";

interface DetailFinanceData {
  id: string;
  title: string;
  text: string;
}

interface DetailFinanceProps {
  financeTitle: string;
  financeData: DetailFinanceData[];
}

export const DetailFinance = ({
  financeTitle,
  financeData,
}: DetailFinanceProps) => {
  return (
    <DetailFinanceStyled>
      <div className="detail-finance-title">
        <span>{financeTitle}</span>
      </div>
      <div className="detail-finance-data">
        {financeData.map((item: DetailFinanceData) => {
          return (
            <DetailInformation
              key={item.id}
              title={item.title}
              text={item.text}
            />
          );
        })}
      </div>
    </DetailFinanceStyled>
  );
};

export default DetailFinance;
