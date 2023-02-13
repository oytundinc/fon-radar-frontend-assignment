import { useTranslation } from "react-i18next";
import DetailCheck from "../../components/detail-check/detail-check";
import { RightOutlined } from "@ant-design/icons";

const DetailRightPanel = () => {
  const { t } = useTranslation();

  return (
    <>
      <DetailCheck
        title={t("detailRightPanel.basicInformationRequired")}
        check={true}
      />
      <DetailCheck
        title={t("detailRightPanel.commercialRegistryGazetteInformation")}
        check={true}
      />
      <DetailCheck
        title={t("detailRightPanel.coverageInformation")}
        check={true}
      />
      <DetailCheck
        title={t("detailRightPanel.creditInsuranceInformation")}
        check={true}
      />
      <DetailCheck
        title={t("detailRightPanel.findeksInformation")}
        check={true}
      />
      <DetailCheck
        title={t("detailRightPanel.financialStatements")}
        check={true}
      />
      <DetailCheck title={t("detailRightPanel.legalDocuments")} check={true} />
      <DetailCheck
        title={t("detailRightPanel.workingConditions")}
        check={false}
      >
        <a href="https://www.fonradar.com/" className="detail-check-link">
          {t("detailRightPanel.workingConditionsLink")}
          <RightOutlined />
        </a>
      </DetailCheck>
    </>
  );
};

export default DetailRightPanel;
