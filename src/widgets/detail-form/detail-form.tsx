import { Col, Row } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/button";
import useCustomerApi from "../../service/customer/customer.api";
import { CustomerData } from "../../service/customer/customer.model";
import CustomerModal from "../costumer-modal/customer-modal";
import DetailLeftPanel from "../detail-left-panel/detail-left-panel";
import DetailRightPanel from "../detail-right-panel/detail-right-panel";
import { DetailFormStyled } from "./detail-form.styles";

interface DetailFormProps {
  id: string;
}

const DetailForm = ({ id }: DetailFormProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [customer, setCustomer] = useState<CustomerData>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { getCustomerById, updateCustomerById, deleteCustomerById } =
    useCustomerApi();

  const getCustomerDetail = useCallback(async () => {
    try {
      const response = await getCustomerById(id);
      setCustomer(response.data);
    } catch (error) {}
  }, [id, getCustomerById]);

  const updateCustomer = useCallback(async (updatedCustomer: CustomerData) => {
    try {
      const response = await updateCustomerById(id, updatedCustomer!);
      if (response.data) {
        setCustomer(response.data);
      }
    } catch (error) {}
  }, [updateCustomerById, id]);

  const deleteCustomer = useCallback(async () => {
    try {
      const response = await deleteCustomerById(id);
      if (response.data) {
        navigate("/customer-page");
      }
    } catch (error) {}
  }, [deleteCustomerById, id, navigate]);

  useEffect(() => {
    getCustomerDetail();
  }, [getCustomerDetail]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = (updatedCustomer: CustomerData) => {
    setCustomer(updatedCustomer);
    updateCustomer(updatedCustomer);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <DetailFormStyled>
      <Row className="detail-form-header">
        <Col md={18}>
          <h1 className="detail-form-header-title">
            {t("detailForm.headerTitle")}
          </h1>
        </Col>

        <Col md={6}>
          <div className="detail-form-button-container">
            <Button
              onClick={() => {
                showModal();
              }}
              className="detail-form-edit-button"
            >
              {t("detailForm.headerEditButtonText")}
            </Button>
            <Button
              onClick={() => {
                deleteCustomer();
              }}
              className="detail-form-delete-button"
            >
              {t("detailForm.headerDeleteButtonText")}
            </Button>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <DetailLeftPanel data={customer} />
        </Col>
        <Col md={12}>
          <DetailRightPanel />
        </Col>
        <CustomerModal
          title="Basic Modal"
          open={isModalOpen}
          handleOk={handleOk}
          onCancel={handleCancel}
          dataSource={customer}
          okText={t("detailForm.editModalOkText")}
          cancelText={t("detailForm.editModalCancelText")}
        />
      </Row>
    </DetailFormStyled>
  );
};

export default DetailForm;
