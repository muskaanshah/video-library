import { useNavigate } from "react-router-dom";
import { useAuth, useTheme, useVideo } from "../../context";
import { ACTION_TYPE } from "../../utils";
import "./userprofile.css";

function UserProfile() {
    const { user, setToken, setUser } = useAuth();
    const { videoDispatch, videoState } = useVideo();
    const { alertDispatch } = useTheme();
    const navigate = useNavigate();
    const userLogoutHandler = () => {
        videoDispatch({ type: ACTION_TYPE.USER_LOGOUT });
        console.log({ videoState });
        localStorage.removeItem("encodedToken");
        localStorage.removeItem("user");
        setToken("");
        setUser({});
        navigate("/");
        alertDispatch({
            type: ACTION_TYPE.ACTIVATE_ALERT,
            payload: {
                alertType: "success",
                alertMsg: "You have been logged out",
            },
        });
    };
    return (
        <div className="container-body centered">
            <div className="profile-card">
                <div className="bg-primary color-black p-1 fw-500 text-center">
                    User Profile
                </div>
                <div className="color-white profile-section p-1">
                    <span className="fw-400 fs-1-1 border-bottom">User Details</span>
                    <p className="mb-0-5">{`Name: ${user.firstName} ${user.lastName}`}</p>
                    <p className="mt-0-5">Email: {user.email}</p>
                    <div className="mt-1">
                        <span
                            className="color-primary border-bottom cursor-pointer"
                            onClick={userLogoutHandler}
                        >
                            Logout
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { UserProfile };
