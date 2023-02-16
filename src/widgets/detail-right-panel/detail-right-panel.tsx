import { useTranslation } from "react-i18next";
import DetailCheck from "../../components/detail-check/detail-check";
import {
  RightOutlined,
  HomeOutlined,
  SnippetsOutlined,
  FormOutlined,
  BookOutlined,
  RiseOutlined,
  InboxOutlined,
  BlockOutlined,
  FolderOpenOutlined,
} from "@ant-design/icons";
const DetailRightPanel = () => {
  const { t } = useTranslation();

  return (
    <>
      <DetailCheck
        title={t("detailRightPanel.basicInformationRequired")}
        check={true}
        icon={<HomeOutlined />}
      />
      <DetailCheck
        title={t("detailRightPanel.commercialRegistryGazetteInformation")}
        check={true}
        icon={<SnippetsOutlined />}
      />
      <DetailCheck
        title={t("detailRightPanel.coverageInformation")}
        check={true}
        icon={<FormOutlined />}
      />
      <DetailCheck
        title={t("detailRightPanel.creditInsuranceInformation")}
        check={true}
        icon={<BookOutlined />}
      />
      <DetailCheck
        title={t("detailRightPanel.findeksInformation")}
        check={true}
        icon={<RiseOutlined />}
      />
      <DetailCheck
        title={t("detailRightPanel.financialStatements")}
        check={true}
        icon={<InboxOutlined />}
      />
      <DetailCheck
        title={t("detailRightPanel.legalDocuments")}
        check={true}
        icon={<BlockOutlined />}
      />
      <DetailCheck
        title={t("detailRightPanel.workingConditions")}
        check={false}
        icon={<FolderOpenOutlined />}
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
