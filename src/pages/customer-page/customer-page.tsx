import { Form } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/button";
//import { useTranslation } from 'react-i18next';
import { DataTable } from "../../components/data-table/data-table";
import LayoutContainer from "../../components/layout/layout";
import { SearchInput } from "../../components/search-input/search-input";
import useCustomerApi from "../../service/customer/customer.api";
import { CustomerData } from "../../service/customer/customer.model";
import CustomerModal from "../../widgets/costumer-modal/customer-modal";
import { CustomerPageWrapped } from "./customer-page-styles";

export const CustomerPage = () => {
  //const { t } = useTranslation();
  const [data, setData] = useState<CustomerData[]>([]);
  const navigate = useNavigate();
  const { getAllCustomers } = useCustomerApi();
  const { t } = useTranslation();
  const detail = () => {
    navigate("/detail-page");
  };

  const columns = [
    {
      title: t('customerPage.tableFirstColumn'),
      dataIndex: "companyName",
      key: "companyName",
    },
    {
      title: t('customerPage.tableSecondColumn'),
      dataIndex: "taxNumber",
      key: "taxNumber",
    },
    {
      title: t('customerPage.tableThirdColumn'),
      dataIndex: "taxOffice",
      key: "taxOffice",
    },
    {
      title: t('customerPage.tableFourthColumn'),
      dataIndex: "invoiceCount",
      key: "invoiceCount",
    },
  ];

  const fetchData = useCallback(async () => {
    try {
      const response = await getAllCustomers();
      setData(response.data);
    } catch (error) {}
  }, [getAllCustomers]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
    console.log("açılll");
  };

  const handleOk = () => {
    setIsModalOpen(false);
    console.log("okkkk");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    console.log("cancellll");
  };
  return (
    <CustomerPageWrapped className="customer-page-wrapped">
      <LayoutContainer>
        <Form className="customer-page">
          <div className="customer-page-header">
            <h3 className="customer-page-header-title">
              {t("customerPage.headerTitle")}
            </h3>
            <Button
              className="costumer-page-new-customer-button"
              onClick={() => {
                showModal();
              }}
            >
              {t("customerPage.headerAddNewCustomerButton")}
            </Button>
          </div>
          <SearchInput placeholder={t("customerPage.searchInputPlaceholder")} />
          <DataTable
            dataSource={data}
            columns={columns}
            onClick={() => {
              detail();
            }}
          />
        </Form>
        <CustomerModal
          title={t("customerPage.modalTitle")}
          open={isModalOpen}
          onOK={handleOk}
          onCancel={handleCancel}
        />
      </LayoutContainer>
    </CustomerPageWrapped>
  );
};
