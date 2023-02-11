import { Table } from "antd";
import { DataTableStyled } from "./data-table.styles";

type DataTableProps = {
  columns?: object[];
  dataSource?: object[];
  onClick?: () => void;
  pagination?: boolean;
};

export const DataTable = ({ dataSource, columns, onClick }: DataTableProps) => {
  return (
    <DataTableStyled>
      <Table
        dataSource={dataSource}
        columns={columns}
        onRow={(row) => {
          return {
            onClick: onClick,
          };
        }}
        scroll={{ y: 400 }}
      />
    </DataTableStyled>
  );
};
