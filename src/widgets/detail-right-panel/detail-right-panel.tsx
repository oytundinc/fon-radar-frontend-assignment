import DetailCheck from "../../components/detail-check/detail-check";

const DetailRightPanel = () => {
  return (
    <>
      <DetailCheck title="Temel Bilgiler Mecburi" check={true} />
      <DetailCheck title="Ticari Sicil Gazatesi Bilgileri" check={true} />
      <DetailCheck title="Teminat Bilgileri" check={true} />
      <DetailCheck title="Alacak Sigortası Bilgileri" check={true} />
      <DetailCheck title="Findeks Bilgileri" check={true} />
      <DetailCheck title="Mali Tablolar" check={true} />
      <DetailCheck title="Legal Evraklar" check={true} />
      <DetailCheck title="Çalışma Koşulları" check={false} />
    </>
  );
};

export default DetailRightPanel;
