import LayoutContainer from "../../components/layout/layout";
import DetailForm from "../../widgets/detail-form/detail-form";
import { DetailPageWrapped } from "./detail-page.styles";
import {useLocation} from 'react-router-dom';

export const DetailPage = () => {
  const location = useLocation();

  return (
    <LayoutContainer>
      <DetailPageWrapped className="detail-page-wrapped">
        <DetailForm id={location.state.id}/>
      </DetailPageWrapped>
    </LayoutContainer>
  );
};
