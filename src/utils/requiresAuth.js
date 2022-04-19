import { Navigate, useLocation, Outlet } from "react-router-dom";

const RequiresAuth = () => {
    const location = useLocation();
    const token = localStorage.getItem("encodedToken");
    return token ? (
        <Outlet />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
};

const NotRequiresAuth = () => {
    const location = useLocation();
    const token = localStorage.getItem("encodedToken");
    return token ? <Navigate to="/" state={{ from: location }} replace /> : <Outlet />;
};

export { RequiresAuth, NotRequiresAuth };
