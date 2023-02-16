import { DetailCheckStyled } from "./detail-check.styles";
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";

type DetailCheckProps = {
  title: string;
  check: boolean;
  children?: JSX.Element;
  icon: JSX.Element;
};

function DetailCheck({ title, check, children, icon }: DetailCheckProps) {
  return (
    <DetailCheckStyled>
      <div>
        {icon}
        <span className="detail-check-info-title">{title}</span>
      </div>
      {children ? (
        children
      ) : check ? (
        <CheckCircleFilled />
      ) : (
        <CloseCircleFilled />
      )}
    </DetailCheckStyled>
  );
}

export default DetailCheck;
