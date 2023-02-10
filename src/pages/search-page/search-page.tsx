import { Form } from "antd";
//import { useTranslation } from 'react-i18next';
import { DataTable } from "../../components/data-table/data-table";
import { SearchInput } from "../../components/search-input/search-input";
import { SearchPageWrapped } from "./search-page-styles";

const sources = [
  {
    key: "1",
    companyName: "Mike",
    taxNumber: 32,
    taxOffice: "10 Downing Street",
    invoiceCount: 2222,
  },
  {
    key: "2",
    companyName: "Mike",
    taxNumber: 32,
    taxOffice: "10 Downing Street",
    invoiceCount: 2222,
  },
  {
    key: "3",
    companyName: "Mike",
    taxNumber: 32,
    taxOffice: "10 Downing Street",
    invoiceCount: 2222,
  },
];

const columns = [
  {
    title: "Firma Adı",
    dataIndex: "companyName",
    key: "companyName",
  },
  {
    title: "Vergi Kimlik No",
    dataIndex: "taxNumber",
    key: "taxNumber",
  },
  {
    title: "Vergi Dairesi",
    dataIndex: "taxOffice",
    key: "taxOffice",
  },
  {
    title: "Fatura Sayısı",
    dataIndex: "invoiceCount",
    key: "invoiceCount",
  },
];
export const SearchPage = () => {
  //const { t } = useTranslation();

  return (
    <SearchPageWrapped className="search-page-wrapped">
      <Form className="search-page">
        <h3 className="search-page-header">Müşterilerim</h3>
        <SearchInput />
        <DataTable dataSource={sources} columns={columns}/>
      </Form>
    </SearchPageWrapped>
  );
};
