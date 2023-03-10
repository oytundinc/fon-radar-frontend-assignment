import { Form } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/button";
import { DataTable } from "../../components/data-table/data-table";
import { SearchInput } from "../../components/search-input/search-input";
import useCustomerApi from "../../service/customer/customer.api";
import { CustomerData } from "../../service/customer/customer.model";
import CustomerModal from "../../widgets/costumer-modal/customer-modal";
import { CustomerPageWrapped } from "./customer-page-styles";

export const CustomerPage = () => {
  const navigate = useNavigate();
  const { getAllCustomers, addCustomer } = useCustomerApi();
  const { t } = useTranslation();

  const [customers, setCustomers] = useState<CustomerData[]>([]);
  const [filteredCustomers, setFilteredCustomers] = useState<CustomerData[]>(
    []
  );

  const navigateToDetails = (customerId: string) => {
    navigate("/detail-page", { state: { id: customerId } });
  };

  const columns = [
    {
      title: t("customerPage.companyNameColumn"),
      dataIndex: "companyName",
      key: "companyName",
      sorter: (first: CustomerData, second: CustomerData) =>
        first.companyName.localeCompare(second.companyName),
    },
    {
      title: t("customerPage.taxNumberColumn"),
      dataIndex: "taxNumber",
      key: "taxNumber",
      sorter: (first: CustomerData, second: CustomerData) =>
        first.taxNumber - second.taxNumber,
    },
    {
      title: t("customerPage.taxOfficeColumn"),
      dataIndex: "taxOffice",
      key: "taxOffice",
      sorter: (first: CustomerData, second: CustomerData) =>
        first.taxOffice.localeCompare(second.taxOffice),
    },
    {
      title: t("customerPage.invoiceCountColumn"),
      dataIndex: "invoiceCount",
      key: "invoiceCount",
      sorter: (first: CustomerData, second: CustomerData) =>
        first.invoiceCount - second.invoiceCount,
    },
    {
      title: t("customerPage.contactNumberColumn"),
      dataIndex: "contactNumber",
      key: "contactNumber",
      sorter: (first: CustomerData, second: CustomerData) =>
        first.contactNumber.localeCompare(second.contactNumber),
    },
  ];

  const fetchData = useCallback(async () => {
    try {
      const response = await getAllCustomers();
      setCustomers(response.data);
      setFilteredCustomers(response.data);
    } catch (error) {}
  }, [getAllCustomers]);

  const addNewCustomer = useCallback(
    async (newCustomer: CustomerData) => {
      try {
        const response = await addCustomer(newCustomer!);
        if (response.data) {
        }
      } catch (error) {}
    },
    [addCustomer]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = (newCustomer: CustomerData) => {
    addNewCustomer(newCustomer).then(() => {
      fetchData();
    });
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const filterData = (value: string) => {
    setFilteredCustomers(
      customers.filter((customer: CustomerData) => {
        const loweredCaseValue = value.toLowerCase();
        return (
          customer.taxNumber.toString().includes(loweredCaseValue) ||
          customer.companyName.toLowerCase().includes(loweredCaseValue)
        );
      })
    );
  };
  return (
    <CustomerPageWrapped className="customer-page-wrapped">
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
        <SearchInput
          placeholder={t("customerPage.searchInputPlaceholder")}
          onSearch={filterData}
        />
        <DataTable
          dataSource={filteredCustomers}
          columns={columns}
          handleClick={(id: string) => {
            navigateToDetails(id);
          }}
        />
      </Form>
      <CustomerModal
        title={t("customerPage.modalTitle")}
        open={isModalOpen}
        handleOk={handleOk}
        onCancel={handleCancel}
        okText={t("customerPage.editModalOkText")}
        cancelText={t("customerPage.editModalCancelText")}
      />
    </CustomerPageWrapped>
  );
};
