"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { setRegionFilter } from "../../../redux/countries/countriesSlice";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
const FilterRegions: React.FC<{ className?: string }> = ({ className }) => {
  const dispatch = useDispatch();
  const handleRegionChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    dispatch(setRegionFilter(e.target.value));
  };
  return (
    <div className={`relative inline-block w-full md:w-1/3 ${className}`}>
      <select
        className="block appearance-none w-full bg-white dark:bg-slate-600 border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        onChange={handleRegionChange}
      >
        <option value="">All Regions</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </div>
    </div>
  );
};

export default FilterRegions;
