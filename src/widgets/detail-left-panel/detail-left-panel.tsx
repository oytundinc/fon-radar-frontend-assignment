import DetailFinance from "../../components/detail-finance/detail-finance";
import DetailInformation from "../../components/detail-information/detail-information";

const DetailLeftPanel = () => {

  const firstFinanceData = [{
    id: '1',
    title: '2019',
    text: '123.132.00 ₺'
  },
  {
    id: '2',
    title: '2019',
    text: '123.132.00 ₺'
  },
  {
    id: '3',
    title: '2019',
    text: '123.132.00 ₺'
  }];

  const secondFinanceData = [{
    id: '1',
    title: "Vade",
    text: "3 ay"
  },
  {
    id: '2',
    title: "Ödeme Şekli",
    text: "Nakit"
  },
  {
    id: '3',
    title: "Limit",
    text: '800.000.00 ₺'
  }];

  return (
    <>
      <DetailInformation
        title="Ticaret Ünvanı:"
        text="Deniz Factoring Anonim Şirketi"
      />
      <DetailInformation title="Faaliyet Alanı:" text="Demir Çelik" />
      <DetailInformation title="Teminat:" text="2910141668" />
      <DetailInformation title="Sermaye:" text="123232,00 TL" />

      <div className="profit-container">
        <DetailFinance financeTitle="Kar Bilgileri" financeData={firstFinanceData} />
        <DetailFinance financeTitle="Çalışma Koşulları" financeData={secondFinanceData} />
      </div>
    </>
  );
};

export default DetailLeftPanel;
