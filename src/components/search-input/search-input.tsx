import { Input } from "antd";
import { SearchInputWrapped } from "./search-input.styles";

const { Search } = Input;

interface SearchInputProps {
  placeholder: string;
}

const onSearch = (value: string) => console.log(value);

export const SearchInput = ({ placeholder }: SearchInputProps) => {
  return (
    <SearchInputWrapped className="search-page-wrapped">
      <Search
        placeholder={placeholder}
        allowClear
        onSearch={onSearch}
        className="search-input"
      />
    </SearchInputWrapped>
  );
};
