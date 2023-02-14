import { Input } from "antd";
import { SearchInputWrapped } from "./search-input.styles";

const { Search } = Input;

interface SearchInputProps {
  placeholder: string;
  onSearch: (value: string) => void;
}

export const SearchInput = ({ placeholder, onSearch }: SearchInputProps) => {
  return (
    <SearchInputWrapped className="search-page-wrapped">
      <Search
        placeholder={placeholder}
        allowClear
        onSearch={onSearch}
        onChange={(event) => {
          onSearch(event.target.value);
        }}
        className="search-input"
      />
    </SearchInputWrapped>
  );
};
