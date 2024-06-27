import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark");
      };

    
  return (
    <button
      onClick={toggleTheme}
      className="focus:outline-none transition-colors duration-300"
    >
      {isDarkMode ? (
        <FaMoon className="text-2xl text-blue-400 transition-transform duration-300 transform rotate-0 hover:rotate-12" />
      ) : (
        <FaSun className="text-2xl text-yellow-600 transition-transform duration-300 transform rotate-0 hover:rotate-12" />
      )}
    </button>
  );
};

export default ThemeToggle;
