import { Select } from "antd";

interface SelectProps {
  options: { label: string; value: string }[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export const WrappedSelect = ({
  options,
  defaultValue,
  onChange,
}: SelectProps) => {
  return (
    <Select defaultValue={defaultValue} options={options} onChange={onChange} />
  );
};

export default WrappedSelect;
