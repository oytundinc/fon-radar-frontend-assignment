import { Table } from "antd";
import { StyledDataTable } from "./data-table.styles";

type DataTableProps = {
  cols?: [];
  source?: [];
};

export const DataTable = ({ source, cols }: DataTableProps) => {
  return (
    <StyledDataTable>
      <Table dataSource={source} columns={cols} />
    </StyledDataTable>
  );
};
