import { createContext, useContext, useState, useEffect } from "react";

const themeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");

    const toggleThemeHandler = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    useEffect(() => {
        let currentTheme = localStorage.getItem("theme") ?? "dark";
        setTheme(currentTheme);
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <themeContext.Provider value={{ theme, toggleThemeHandler }}>
            {children}
        </themeContext.Provider>
    );
};

const useTheme = () => useContext(themeContext);

export { ThemeProvider, useTheme };
