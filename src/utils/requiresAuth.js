import { Navigate, useLocation, Outlet } from "react-router-dom";

const RequiresAuth = () => {
    const location = useLocation();
    const token = localStorage.getItem("encodedToken");
    return token ? (
        <Outlet />
    ) : (
        <Navigate to="/login" state={{ from: location?.pathname }} replace />
    );
};

const NotRequiresAuth = () => {
    const location = useLocation();
    console.log(location.state?.from);
    const token = localStorage.getItem("encodedToken");
    return token ? (
        <Navigate
            to={location.state?.from ?? "/"}
            // state={{ from: null }}
            replace
        />
    ) : (
        <Outlet />
    );
};

export { RequiresAuth, NotRequiresAuth };
