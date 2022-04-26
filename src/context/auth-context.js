import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const encodedToken = localStorage.getItem("encodedToken");
    const [token, setToken] = useState(encodedToken ?? "");
    const userFromLocalStorage = JSON.parse(localStorage.getItem("user"));
    const [user, setUser] = useState(userFromLocalStorage ?? "");
    return (
        <AuthContext.Provider value={{ token, setToken, user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
