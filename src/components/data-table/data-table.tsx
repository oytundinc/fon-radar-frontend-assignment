import { Table } from "antd";
import { StyledDataTable } from "./data-table.styles";

type DataTableProps = {
  columns?: object[];
  dataSource?: object[];
};

export const DataTable = ({ dataSource, columns }: DataTableProps) => {
  return (
    <StyledDataTable>
      <Table dataSource={dataSource} columns={columns} />
    </StyledDataTable>
  );
};
