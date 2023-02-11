import { DetailCheckStyled } from "./detail-check.styles";
import {
  HomeOutlined,
  CheckCircleFilled,
  CloseCircleFilled,
} from "@ant-design/icons";

type DetailCheckProps = {
  title: string;
  check: boolean;
};

function DetailCheck({ title, check }: DetailCheckProps) {
  return (
    <DetailCheckStyled>
      <div>
        <HomeOutlined />
        <span className="detail-check-info-title">{title}</span>
      </div>
      {check ? <CheckCircleFilled /> : <CloseCircleFilled />}
    </DetailCheckStyled>
  );
}

export default DetailCheck;
