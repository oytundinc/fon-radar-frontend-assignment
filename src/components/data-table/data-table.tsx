import { Table } from "antd";
import { CustomerData } from "../../service/customer/customer.model";
import { DataTableStyled } from "./data-table.styles";

type DataTableProps = {
  columns?: object[];
  dataSource?: CustomerData[];
  handleClick: (id: string) => void;
};

export const DataTable = ({ dataSource, columns, handleClick }: DataTableProps) => {
  return (
    <DataTableStyled>
      <Table
        dataSource={dataSource}
        columns={columns}
        rowKey={"id"}
        onRow={(row) => {
          return {
            onClick: (event) => {
              handleClick(row.id);
            },
          };
        }}
        scroll={{ y: 400 }}
      />
    </DataTableStyled>
  );
};
