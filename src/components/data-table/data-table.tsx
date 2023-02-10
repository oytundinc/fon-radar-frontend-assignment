import { Table } from "antd";
import { DataTableStyled } from "./data-table.styles";

type DataTableProps = {
  columns?: object[];
  dataSource?: object[];
};

export const DataTable = ({ dataSource, columns }: DataTableProps) => {
  return (
    <DataTableStyled>
      <Table dataSource={dataSource} columns={columns} />
    </DataTableStyled>
  );
};
