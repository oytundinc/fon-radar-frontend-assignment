import { Input } from "antd";
import { SearchInputWrapped } from "./search-input.styles";

const { Search } = Input;


const onSearch = (value: string) => console.log(value);

export const SearchInput = () => {

  return (
    <SearchInputWrapped className="search-page-wrapped">
      <Search placeholder="input search text" allowClear onSearch={onSearch} className="search-input"/>
    </SearchInputWrapped>
  );
};