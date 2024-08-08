"use client";
import React from "react";
import useTheme from "@/app/hooks/useTheme";
import MoonFilledIcon from "../icons/MoonFilledIcon";
import MoonIcon from "../icons/MoonIcon";
const ThemeButton = () => {
  const [theme, toggleTheme] = useTheme();
  const handleOnClick = () => {
    toggleTheme();
  };
  return (
    <button className="ml-auto flex" onClick={handleOnClick}>
      {theme === "dark" ? (
        <>
          <span className="font-bold uppercase text-sm">LIGHT</span>
          <MoonFilledIcon className="ml-2 inline-block" />
        </>
      ) : (
        <>
          <span className=" font-bold uppercase text-sm">Dark</span>
          <MoonIcon className="ml-2 inline-block" />
        </>
      )}
    </button>
  );
};

export default ThemeButton;
