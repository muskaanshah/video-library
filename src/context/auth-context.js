import { createContext, useContext, useState } from "react";

const authContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState();
    const [user, setUser] = useState("");
    return (
        <authContext.Provider value={{ token, setToken, user, setUser }}>
            {children}
        </authContext.Provider>
    );
};

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };
