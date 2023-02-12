import Input from "../../components/input/input";
import { Modal, ModalProps } from "../../components/modal/modal";
import { CustomerModalStyled } from "./customer-modal.styles";

interface CustomerModalProps extends ModalProps {}

const CustomerModal = ({ title, open, onOK, onCancel }: CustomerModalProps) => {
  return (
    <CustomerModalStyled>
      <Modal title="Müşteri Bilgileri" open={open} onOK={onOK} onCancel={onCancel}>
        <Input
          label="Firma Adı"
          placeholder="Firma Adı Giriniz."
          layout={"horizontal"}
        />
        <Input label="Vergi Kimlik No" placeholder="Vergi Kimlik No Giriniz." layout={"horizontal"} />
        <Input label="Vergi Dairesi" placeholder="Vergi Dairesi Giriniz." layout={"horizontal"} />
        <Input label="Fatura Sayısı" placeholder="Fatura Sayısı Giriniz." layout={"horizontal"} />
      </Modal>
    </CustomerModalStyled>
  );
};

export default CustomerModal;
