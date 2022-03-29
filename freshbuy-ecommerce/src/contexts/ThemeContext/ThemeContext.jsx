import { useContext, createContext, useState } from "react";

const defaultTheme = { theme: "light" };

const ThemeContext = createContext(defaultTheme);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const Toggle = () => {
    if (theme === "dark") {
      setTheme("light");
      document.body.classList.remove("dark-theme")
      document.body.classList.add("light-theme")
    } else {
      setTheme("dark");
      document.body.classList.remove("light-theme")
      document.body.classList.add("dark-theme")
      
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, Toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
