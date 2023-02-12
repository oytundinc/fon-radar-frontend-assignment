import { DetailInformationStyled } from "./detail-information.styles";

export interface DetailInformationProps {
  title: string;
  text: string;
}

export const DetailInformation = ({ title, text }: DetailInformationProps) => {
  return (
    <DetailInformationStyled>
      <span className="detail-information-title">{title}</span>
      <span className="detail-information-text">{text}</span>
    </DetailInformationStyled>
  );
};

export default DetailInformation;
