import { Select } from "antd";

export const WrappedSelect = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const optionsLanguage = [
    { value: "TR", label: "Turkish" },
    { value: "ENG", label: "English" },
    { value: "CN", label: "Chinese" },
    { value: "HE", label: "Hebrew"},
  ];
  return (
    <Select
      defaultValue="TR"
      onChange={handleChange}
      options={optionsLanguage}
    >
      optionsLanguage
    </Select>
  );
};

export default WrappedSelect;
