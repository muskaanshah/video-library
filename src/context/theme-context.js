import { createContext, useContext, useState, useEffect, useReducer } from "react";
import { ACTION_TYPE } from "../utils";

const ThemeContext = createContext();

const alertReducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPE.ACTIVATE_ALERT:
            return {
                ...state,
                alertType: action.payload.alertType,
                alertMsg: action.payload.alertMsg,
                active: true,
            };
        case ACTION_TYPE.DEACTIVATE_ALERT:
            return { ...state, alertType: "", alertMsg: "", active: false };
        default:
            return state;
    }
};

const initialState = {
    alertType: "",
    active: false,
    alertMsg: "",
};

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");
    const [loader, setLoader] = useState(false);
    const [alertState, alertDispatch] = useReducer(alertReducer, initialState);

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
        <ThemeContext.Provider
            value={{
                theme,
                toggleThemeHandler,
                loader,
                setLoader,
                alertState,
                alertDispatch,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
