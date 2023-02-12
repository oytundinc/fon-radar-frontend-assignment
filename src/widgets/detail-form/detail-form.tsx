import { Col, Row } from "antd";
import { useState } from "react";
import { Button } from "../../components/button/button";
import CustomerModal from "../costumer-modal/customer-modal";
import DetailLeftPanel from "../detail-left-panel/detail-left-panel";
import DetailRightPanel from "../detail-right-panel/detail-right-panel";
import { DetailFormStyled } from "./detail-form.styles";

const DetailForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <DetailFormStyled>
      <Row className="detail-form-header">
        <Col md={18}>
          <h1 className="detail-form-header-title">Müşteri</h1>
        </Col>

        <Col md={6}>
          <div className="detail-form-button-container">
            <Button
              onClick={() => {
                showModal();
              }}
              className="detail-form-edit-button"
            >
              Düzenle
            </Button>
            <Button className="detail-form-delete-button">Sil</Button>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <DetailLeftPanel />
        </Col>
        <Col md={12}>
          <DetailRightPanel />
        </Col>
        <CustomerModal title="Basic Modal" open={isModalOpen} onOK={handleOk} onCancel={handleCancel}/>
      </Row>
    </DetailFormStyled>
  );
};

export default DetailForm;
