"use client";
import React from "react";

import {
  useGetAllCountriesQuery,
  selectFilteredCountries,
} from "@/redux/countries/countriesSlice";

import { useSelector } from "react-redux";
import CountryCard from "../CountryCard";
const Countries = () => {
  const { isLoading } = useGetAllCountriesQuery();
  const filteredCountries = useSelector(selectFilteredCountries);

  if (isLoading) {
    return (
      <div className=" text-3xl text-green-900 font-bold">Loading.....</div>
    );
  }
  return (
    <div className=" mt-3 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-8 ">
      {filteredCountries.map((country, index) => (
        <CountryCard
          key={index}
          flags={country.flags}
          name={country.name.common}
          capital={country.capital}
          region={country.region}
          population={country.population}
          className="mx-auto md:mx-0 md:w-auto w-[80%]"
        />
      ))}
    </div>
  );
};

export default Countries;
