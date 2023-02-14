import { useTranslation } from "react-i18next";
import Input from "../../components/input/input";
import { Modal, ModalProps } from "../../components/modal/modal";
import { CustomerData } from "../../service/customer/customer.model";

interface CustomerModalProps extends ModalProps {
  dataSource?: CustomerData;
}

const CustomerModal = ({ open, onOK, onCancel, dataSource }: CustomerModalProps) => {
  const { t } = useTranslation();

  return (
      <Modal
        title={t("customerModal.modalTitle")}
        open={open}
        onOK={onOK}
        onCancel={onCancel}
      >
        <Input
          label={t("customerModal.companyNameInputLabel") as string}
          placeholder={t("customerModal.companyNameInputPlaceholder")}
          layout={"horizontal"}
          defaultValue={dataSource?.companyName}
        />
        <Input
          label={t("customerModal.taxOfficeInputLabel") as string}
          placeholder={t("customerModal.taxOfficeInputPlaceholder")}
          layout={"horizontal"}
          defaultValue={dataSource?.taxOffice}
          type="string"
        />
        <Input
          label={t("customerModal.taxNumberInputLabel") as string}
          placeholder={t("customerModal.taxNumberInputPlaceholder")}
          layout={"horizontal"}
          defaultValue={dataSource?.taxNumber}
          type="number"
        />
        <Input
          label={t("customerModal.invoiceCountInputLabel") as string}
          placeholder={t("customerModal.invoiceCountInputPlaceholder")}
          layout={"horizontal"}
          defaultValue={dataSource?.invoiceCount}
          type="number"
        />
      </Modal>
  );
};

export default CustomerModal;
