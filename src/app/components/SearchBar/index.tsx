import React from "react";
import SearchInputField from "../SearchInputField";
import FilterRegions from "../FilterRegions";
const SearchBar = () => {
  return (
    <div className="my-10 flex">
      <SearchInputField />
      <FilterRegions className="ml-auto" />
    </div>
  );
};

export default SearchBar;
