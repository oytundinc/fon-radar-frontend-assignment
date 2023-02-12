import { useTranslation } from "react-i18next";
import DetailFinance from "../../components/detail-finance/detail-finance";
import DetailInformation from "../../components/detail-information/detail-information";
import { CustomerData } from "../../service/customer/customer.model";

interface DetailLeftPanelProps {
  data?: CustomerData;
}

const DetailLeftPanel = ({data}: DetailLeftPanelProps) => {
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
        title={t("detailLeftPanel.detailInformationCompanyNameTitle")}
        text={data? data.companyName : ""}
      />
      <DetailInformation
        title={t("detailLeftPanel.detailInformationTaxOfficeTitle")}
        text={data? data?.taxOffice : ""}
      />
      <DetailInformation
        title={t("detailLeftPanel.detailInformationTaxNumberTitle")}
        text={data? data?.taxNumber : ""}
      />
      <DetailInformation
        title={t("detailLeftPanel.detailInformationInvoiceCountTitle")}
        text={data? data?.invoiceCount : ""}
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
