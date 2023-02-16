import { Form } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Input from "../../components/input/input";
import { Modal, ModalProps } from "../../components/modal/modal";
import { CustomerData } from "../../service/customer/customer.model";

interface CustomerModalProps extends ModalProps {
  dataSource?: CustomerData;
  handleOk: (updatedCustomer: CustomerData) => void;
}

const CustomerModal = ({
  open,
  onOk,
  onCancel,
  dataSource,
  okText,
  cancelText,
  handleOk,
}: CustomerModalProps) => {
  const { t } = useTranslation();
  const [companyName, setCompanyName] = useState<string>(
    dataSource?.companyName as string
  );
  const [taxOffice, setTaxOffice] = useState<string>(
    dataSource?.taxOffice as string
  );
  const [taxNumber, setTaxNumber] = useState<number>(
    dataSource?.taxNumber as number
  );
  const [invoiceCount, setInvoiceCount] = useState<number>(
    dataSource?.invoiceCount as number
  );
  const [contactNumber, setContactNumber] = useState<string>(
    dataSource?.contactNumber as string
  );

  return (
    <Modal
      title={t("customerModal.modalTitle")}
      open={open}
      onOk={() => {
        handleOk({
          companyName: companyName,
          taxOffice: taxOffice,
          taxNumber: taxNumber,
          invoiceCount: invoiceCount,
          contactNumber: contactNumber,
        } as CustomerData);
      }}
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
            onChange={(event) => {
              setCompanyName(event.target.value);
            }}
          />
        </Form.Item>
        <Form.Item label={t("customerModal.taxOfficeInputLabel")}>
          <Input
            placeholder={t("customerModal.taxOfficeInputPlaceholder")}
            layout={"horizontal"}
            defaultValue={dataSource?.taxOffice}
            onChange={(event) => {
              setTaxOffice(event.target.value);
            }}
            type="string"
          />
        </Form.Item>
        <Form.Item label={t("customerModal.taxNumberInputLabel")}>
          <Input
            placeholder={t("customerModal.taxNumberInputPlaceholder")}
            layout={"horizontal"}
            defaultValue={dataSource?.taxNumber}
            onChange={(event) => {
              setTaxNumber(parseInt(event.target.value));
            }}
            type="number"
          />
        </Form.Item>
        <Form.Item label={t("customerModal.invoiceCountInputLabel")}>
          <Input
            placeholder={t("customerModal.invoiceCountInputPlaceholder")}
            layout={"horizontal"}
            defaultValue={dataSource?.invoiceCount}
            onChange={(event) => {
              setInvoiceCount(parseInt(event.target.value));
            }}
            type="number"
          />
        </Form.Item>
        <Form.Item label={t("customerModal.contactNumberInputLabel")}>
          <Input
            placeholder={t("customerModal.contactNumberInputPlaceholder")}
            layout={"horizontal"}
            defaultValue={dataSource?.contactNumber}
            onChange={(event) => {
              setContactNumber(event.target.value);
            }}
            type="string"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CustomerModal;
