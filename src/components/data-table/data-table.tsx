import { Table } from "antd";
import { DataTableStyled } from "./data-table.styles";

type DataTableProps = {
  columns?: object[];
  dataSource?: object[];
  onClick?: () => void;
};

export const DataTable = ({
  dataSource,
  columns,
  onClick,
}: DataTableProps) => {
  return (
    <DataTableStyled>
      <Table dataSource={dataSource} columns={columns} onRow={(record) => {
          return {
            onClick: onClick
          };
        }} />
    </DataTableStyled>
  );
};
