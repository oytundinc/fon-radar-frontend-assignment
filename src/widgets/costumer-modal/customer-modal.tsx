import { Form } from "antd";
import { useTranslation } from "react-i18next";
import Input from "../../components/input/input";
import { Modal, ModalProps } from "../../components/modal/modal";
import { CustomerData } from "../../service/customer/customer.model";

interface CustomerModalProps extends ModalProps {
  dataSource?: CustomerData;
}

const CustomerModal = ({
  open,
  onOK,
  onCancel,
  dataSource,
  okText,
  cancelText,
}: CustomerModalProps) => {
  const { t } = useTranslation();

  return (
    <Modal
      title={t("customerModal.modalTitle")}
      open={open}
      onOK={onOK}
      onCancel={onCancel}
      okText={okText}
      cancelText={cancelText}
    >
      <Form layout="vertical">
        <Form.Item label={t("customerModal.companyNameInputLabel")}>
          <Input
            placeholder={t("customerModal.companyNameInputPlaceholder")}
            layout={"horizontal"}
            defaultValue={dataSource?.companyName}
          />
        </Form.Item>
        <Form.Item label={t("customerModal.taxOfficeInputLabel")}>
          <Input
            placeholder={t("customerModal.taxOfficeInputPlaceholder")}
            layout={"horizontal"}
            defaultValue={dataSource?.taxOffice}
            type="string"
          />
        </Form.Item>
        <Form.Item label={t("customerModal.taxNumberInputLabel")}>
          <Input
            placeholder={t("customerModal.taxNumberInputPlaceholder")}
            layout={"horizontal"}
            defaultValue={dataSource?.taxNumber}
            type="number"
          />
        </Form.Item>
        <Form.Item label={t("customerModal.invoiceCountInputLabel")}>
          <Input
            placeholder={t("customerModal.invoiceCountInputPlaceholder")}
            layout={"horizontal"}
            defaultValue={dataSource?.invoiceCount}
            type="number"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CustomerModal;
