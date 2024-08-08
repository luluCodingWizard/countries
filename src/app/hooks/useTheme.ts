import { useState, useEffect } from "react";

type ThemeI = "light" | "dark";
const useTheme = (): [ThemeI, () => void] => {
  const [theme, setTheme] = useState<ThemeI>("light");

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = (): void => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return [theme, toggleTheme];
};

export default useTheme;
