import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
const ThemeContext = createContext();

const localStorageKey = "picoPreferredColorScheme";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return window.localStorage.getItem(localStorageKey) || "auto";
    }
    return "auto";
  });

  useEffect(() => {
    const preferredScheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    if (theme === "auto") {
      document.documentElement.setAttribute('data-theme', preferredScheme);
      window.localStorage.setItem(localStorageKey, preferredScheme);
    } else {
      document.documentElement.setAttribute('data-theme', theme);
      window.localStorage.setItem(localStorageKey, theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};