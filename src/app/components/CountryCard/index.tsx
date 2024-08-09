"use client";
import React from "react";
import Image from "next/image";
// import { useRouter } from "next/navigation";
interface CountryCardI {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: string;
  region: string;
  population: number;
  capital: string;
  className?: string;
}
const CountryCard = ({
  flags,
  name,
  region,
  population,
  capital,
  className = "",
}: CountryCardI) => {
  //   const router = useRouter();
  //   const handleNavigation = (): void => {
  //     router.push(`/countries/${name.trim()}`);
  //   };
  return (
    <div
      className={` rounded overflow-hidden shadow-lg relative dark:bg-slate-600 bg-white ${className}`}
    >
      <div className="relative w-full h-48">
        <Image
          src={flags.png}
          layout="fill"
          objectFit="cover"
          alt={flags.alt}
        />
      </div>

      <div className="px-6 py-4">
        <h1 className=" text-2xl font-bold "> {name}</h1>
        <p className="mt-3">
          <span className=" font-semibold mr-2">Population:</span> {population}
        </p>
        <p className="mt-3">
          <span className=" font-semibold mr-2">Region:</span> {region}
        </p>
        <p className="mt-3">
          <span className=" font-semibold mr-2">Capital:</span> {capital}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
