import { useTranslation } from "react-i18next";
import DetailFinance from "../../components/detail-finance/detail-finance";
import DetailInformation from "../../components/detail-information/detail-information";
import { CustomerData } from "../../service/customer/customer.model";

interface DetailLeftPanelProps {
  data?: CustomerData;
}

const DetailLeftPanel = ({data}: DetailLeftPanelProps) => {
  const { t } = useTranslation();

  const profitInformationData = [
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

  const workingConditionsData = [
    {
      id: "1",
      title: t("detailLeftPanel.financeDataPaymentPeriodTitle"),
      text: t("detailLeftPanel.financeDataPaymentPeriodText"),
    },
    {
      id: "2",
      title: t("detailLeftPanel.financeDataPaymentMethodTitle"),
      text: t("detailLeftPanel.financeDataPaymentMethodText"),
    },
    {
      id: "3",
      title: t("detailLeftPanel.financeDataLimitTitle"),
      text: t("detailLeftPanel.financeDataLimitText"),
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
      <DetailInformation
        title={t("detailLeftPanel.detailInformationContactNumberTitle")}
        text={data? data?.contactNumber : ""}
      />
      <div className="profit-container">
        <DetailFinance
          financeTitle={t("detailLeftPanel.profitInformationTitle")}
          financeData={profitInformationData}
        />
        <DetailFinance
          financeTitle={t("detailLeftPanel.workingConditionsTitle")}
          financeData={workingConditionsData}
        />
      </div>
    </>
  );
};

export default DetailLeftPanel;
