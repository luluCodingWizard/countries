import React from "react";
import ThemeButton from "../ThemeButton";

const Header = () => {
  return (
    <div className="bg-white dark:bg-slate-600 drop-shadow-lg ">
      <div className="container py-6 px-3 flex items-center">
        <h1 className=" text-2xl font-bold">Where in the World</h1>
        <ThemeButton />
      </div>
    </div>
  );
};

export default Header;
