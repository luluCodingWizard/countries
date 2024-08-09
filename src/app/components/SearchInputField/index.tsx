"use client";
import React, { useState, useDeferredValue, useEffect } from "react";
import { useDispatch } from "react-redux";
import SearchIcon from "../icons/SearchIcon";
import { setSearchQuery } from "../../../redux/countries/countriesSlice";

const SearchInputField: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const defferedSearchedInput = useDeferredValue(searchTerm);
  useEffect(() => {
    dispatch(setSearchQuery(defferedSearchedInput));
  }, [defferedSearchedInput, dispatch]);

  const HandleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="relative text-gray-600 focus-within:text-gray-400 h-[56px]">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <SearchIcon className="w-5 fill-gray-500 dark:fill-white" />
      </span>
      <input
        type="search"
        value={searchTerm}
        onChange={HandleSearch}
        className="py-2 text-sm text-gray-900 dark:text-white bg-white dark:bg-slate-600 rounded-lg pl-10 focus:outline-none focus:bg-white focus:text-gray-900 h-full w-[480px]"
        placeholder="Search for a Country"
      />
    </div>
  );
};

export default SearchInputField;
