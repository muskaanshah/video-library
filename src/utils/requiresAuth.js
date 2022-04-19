import { Navigate, useLocation } from "react-router-dom";

const RequiresAuth = ({ children }) => {
    const location = useLocation();
    const token = localStorage.getItem("encodedToken");
    return token ? children : <Navigate to="/login" state={{ from: location }} replace />;
};

const NotRequiresAuth = ({ children }) => {
    const location = useLocation();
    const token = localStorage.getItem("encodedToken");
    return token ? <Navigate to="/" state={{ from: location }} replace /> : children;
};

export { RequiresAuth, NotRequiresAuth };
