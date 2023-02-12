import { useTranslation } from "react-i18next";
import DetailFinance from "../../components/detail-finance/detail-finance";
import DetailInformation from "../../components/detail-information/detail-information";

const DetailLeftPanel = () => {
  const { t } = useTranslation();

  const firstFinanceData = [
    {
      id: "1",
      title: "2019",
      text: "123.132.00 ₺",
    },
    {
      id: "2",
      title: "2019",
      text: "123.132.00 ₺",
    },
    {
      id: "3",
      title: "2019",
      text: "123.132.00 ₺",
    },
  ];

  const secondFinanceData = [
    {
      id: "1",
      title: "Vade",
      text: "3 ay",
    },
    {
      id: "2",
      title: "Ödeme Şekli",
      text: "Nakit",
    },
    {
      id: "3",
      title: "Limit",
      text: "800.000.00 ₺",
    },
  ];

  return (
    <>
      <DetailInformation
        title={t("detailLeftPanel.firstDetailInformationTitle")}
        text={t("detailLeftPanel.firstDetailInformationText")}
      />
      <DetailInformation
        title={t("detailLeftPanel.secondDetailInformationTitle")}
        text={t("detailLeftPanel.secondDetailInformationText")}
      />
      <DetailInformation
        title={t("detailLeftPanel.thirdDetailInformationTitle")}
        text={t("detailLeftPanel.thirdDetailInformationText")}
      />
      <DetailInformation
        title={t("detailLeftPanel.fourthDetailInformationTitle")}
        text={t("detailLeftPanel.fourthDetailInformationText")}
      />

      <div className="profit-container">
        <DetailFinance
          financeTitle={t("detailLeftPanel.firstDetailFinanceTitle")}
          financeData={firstFinanceData}
        />
        <DetailFinance
          financeTitle={t("detailLeftPanel.secondDetailFinanceTitle")}
          financeData={secondFinanceData}
        />
      </div>
    </>
  );
};

export default DetailLeftPanel;
