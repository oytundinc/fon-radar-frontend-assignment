import { Form } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import { useTranslation } from 'react-i18next';
import { DataTable } from "../../components/data-table/data-table";
import LayoutContainer from "../../components/layout/layout";
import { SearchInput } from "../../components/search-input/search-input";
import useCustomerApi from "../../service/customer/customer.api";
import { CustomerData } from "../../service/customer/customer.model";
import { CustomerPageWrapped } from "./customer-page-styles";

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


export const CustomerPage = () => {
  //const { t } = useTranslation();
  const [data, setData] = useState<CustomerData[]>([]);
  const navigate = useNavigate();
  const { getAllCustomers } = useCustomerApi();
  const detail = () => {
    navigate("/detail-page");
  };

  const fetchData = useCallback(async () => {
    try {
        const response = await getAllCustomers();
        setData(response.data);
    } catch (error) {}
  }, [getAllCustomers]);

  useEffect(() => {
      fetchData();
  }, [fetchData]);

  return (
    <CustomerPageWrapped className="customer-page-wrapped">
      <LayoutContainer>
        <Form className="customer-page">
          <h3 className="customer-page-header">Müşterilerim</h3>
          <SearchInput />
          <DataTable dataSource={data} columns={columns} onClick={()=>{detail()}} />
        </Form>
      </LayoutContainer>
    </CustomerPageWrapped>
  );
};
