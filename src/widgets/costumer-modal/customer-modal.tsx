import { useTranslation } from "react-i18next";
import Input from "../../components/input/input";
import { Modal, ModalProps } from "../../components/modal/modal";
import { CustomerModalStyled } from "./customer-modal.styles";

interface CustomerModalProps extends ModalProps {}

const CustomerModal = ({ title, open, onOK, onCancel }: CustomerModalProps) => {
  const { t } = useTranslation();

  return (
    <CustomerModalStyled>
      <Modal
        title={t("customerModal.modalTitle")}
        open={open}
        onOK={onOK}
        onCancel={onCancel}
      >
        <Input
          label={t("customerModal.firstInputLabel")}
          placeholder={t("customerModal.firstInputPlaceholder")}
          layout={"horizontal"}
        />
        <Input
          label={t("customerModal.secondInputLabel")}
          placeholder={t("customerModal.secondInputPlaceholder")}
          layout={"horizontal"}
        />
        <Input
          label={t("customerModal.thirdInputLabel")}
          placeholder={t("customerModal.thirdInputPlaceholder")}
          layout={"horizontal"}
        />
        <Input
          label={t("customerModal.fourtInputLabel")}
          placeholder={t("customerModal.fourtInputPlaceholder")}
          layout={"horizontal"}
        />
      </Modal>
    </CustomerModalStyled>
  );
};

export default CustomerModal;
