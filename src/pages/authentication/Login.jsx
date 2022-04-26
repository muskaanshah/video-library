import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth, useTheme } from "../../context";
import { loginUser } from "../../services";
import "./authentication.css";

function Login() {
    const { setToken, setUser } = useAuth();
    const form = {
        email: "",
        password: "",
    };
    const [formInput, setFormInput] = useState(form);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const { alertDispatch } = useTheme();

    const formInputHandler = (field, value) => {
        setFormInput({ ...formInput, [field]: value });
    };

    const submitFormHandler = (e) => {
        e.preventDefault();
        loginUser(
            formInput.email,
            formInput.password,
            setToken,
            setUser,
            setError,
            navigate,
            location,
            alertDispatch
        );
    };

    return (
        <div className="container-body color-white centered">
            <div className="card-authentication bg-grey-dark borderradius-0-5 mt-2">
                <p className="text-center fw-500 fs-1-25">Login</p>
                <form onSubmit={submitFormHandler}>
                    <span className="input-box">
                        <input
                            type="email"
                            id="email-address"
                            className="input-text input-authentication p-0-5 fs-0-9 mb-1"
                            placeholder="Email Address *"
                            value={formInput.email}
                            onChange={(e) => formInputHandler("email", e.target.value)}
                            required
                        />
                    </span>
                    <span className="input-box">
                        <input
                            type="password"
                            id="Password"
                            className="input-text input-authentication p-0-5 fs-0-9 mb-1"
                            placeholder="Password *"
                            value={formInput.password}
                            onChange={(e) => formInputHandler("password", e.target.value)}
                            required
                        />
                    </span>
                    {error.length > 0 && (
                        <div className="fs-0-9 color-danger my-0-5">{error}</div>
                    )}
                    <input
                        type="submit"
                        value="Login"
                        className="btn bg-primary fw-500 fs-0-9 mb-1 width-100 color-black"
                    />
                    <input
                        type="submit"
                        value="Login with Test credentials"
                        className="btn bg-primary fw-500 fs-0-9 mb-1 width-100 color-black"
                        onClick={() => {
                            setFormInput({
                                email: "test@gmail.com",
                                password: "test123",
                            });
                        }}
                    />
                </form>
                <div className="centered">
                    <Link to="/signup" className="fs-0-9 color-white text-none centered">
                        Create new account
                        <span className="material-icons-outlined"> navigate_next </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export { Login };
