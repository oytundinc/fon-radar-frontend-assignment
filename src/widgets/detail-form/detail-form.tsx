import { Col, Row } from "antd";
import DetailLeftPanel from "../detail-left-panel/detail-left-panel";
import DetailRightPanel from "../detail-right-panel/detail-right-panel";
import { DetailFormStyled } from "./detail-form.styles";

const DetailForm = () => {
  return (
    <DetailFormStyled>
      <h1 className="detail-form-header">Müşteri</h1>
      <Row>
        <Col md={12}>
          <DetailLeftPanel />
        </Col>
        <Col md={12}>
          <DetailRightPanel />
        </Col>
      </Row>
    </DetailFormStyled>
  );
};

export default DetailForm;
