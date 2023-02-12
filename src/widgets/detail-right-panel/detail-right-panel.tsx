import { useTranslation } from "react-i18next";
import DetailCheck from "../../components/detail-check/detail-check";

const DetailRightPanel = () => {
  const { t } = useTranslation();

  return (
    <>
      <DetailCheck title={t("detailRightPanel.firstTitle")} check={true} />
      <DetailCheck title={t("detailRightPanel.secondTitle")} check={true} />
      <DetailCheck title={t("detailRightPanel.thirdTitle")} check={true} />
      <DetailCheck title={t("detailRightPanel.fourthTitle")} check={true} />
      <DetailCheck title={t("detailRightPanel.fifthTitle")} check={true} />
      <DetailCheck title={t("detailRightPanel.sixthTitle")} check={true} />
      <DetailCheck title={t("detailRightPanel.seventhTitle")} check={true} />
      <DetailCheck title={t("detailRightPanel.eighthTitle")} check={false} />
    </>
  );
};

export default DetailRightPanel;
