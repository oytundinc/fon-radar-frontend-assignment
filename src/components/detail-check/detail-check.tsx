import { DetailCheckStyled } from "./detail-check.styles";
import {
  HomeOutlined,
  CheckCircleFilled,
  CloseCircleFilled,
} from "@ant-design/icons";

type DetailCheckProps = {
  title: string;
  check: boolean;
  children?: JSX.Element;
};

function DetailCheck({ title, check, children }: DetailCheckProps) {
  return (
    <DetailCheckStyled>
      <div>
        <HomeOutlined />
        <span className="detail-check-info-title">{title}</span>
      </div>
      {children? children : (check ? <CheckCircleFilled /> : <CloseCircleFilled />)}
    </DetailCheckStyled>
  );
}

export default DetailCheck;
