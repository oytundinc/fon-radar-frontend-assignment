//import { useTranslation } from 'react-i18next';
import LayoutContainer from "../../components/layout/layout";
import DetailForm from "../../widgets/detail-form/detail-form";
import { DetailPageWrapped } from "./detail-page.styles";

export const DetailPage = () => {
  //const { t } = useTranslation();

  return (
    <LayoutContainer>
      <DetailPageWrapped className="detail-page-wrapped">
        <DetailForm />
      </DetailPageWrapped>
    </LayoutContainer>
  );
};
