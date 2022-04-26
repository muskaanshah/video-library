import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth, useTheme } from "../../context";
import { signUpUser } from "../../services";
import "./authentication.css";

function Signup() {
    const { setToken, setUser } = useAuth();

    const form = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        reEnterPassword: "",
    };
    const [formInput, setFormInput] = useState(form);
    const [termsCheckbox, setTermsCheckbox] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const { alertDispatch } = useTheme();

    const formInputHandler = (field, value) => {
        setFormInput({ ...formInput, [field]: value });
    };

    const submitFormHandler = (e) => {
        e.preventDefault();
        signUpUser(
            formInput.email,
            formInput.password,
            formInput.firstName,
            formInput.lastName,
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
                <p className="text-center fw-500 fs-1-25">Sign up</p>
                <form onSubmit={submitFormHandler}>
                    <span className="input-box">
                        <input
                            type="input"
                            id="first-name"
                            className="input-text input-authentication p-0-5 fs-0-9 mb-1"
                            placeholder="First Name *"
                            value={formInput.firstName}
                            onChange={(e) =>
                                formInputHandler("firstName", e.target.value)
                            }
                            required
                        />
                    </span>
                    <span className="input-box">
                        <input
                            type="input"
                            id="last-name"
                            className="input-text input-authentication p-0-5 fs-0-9 mb-1"
                            placeholder="Last Name *"
                            value={formInput.lastName}
                            onChange={(e) => formInputHandler("lastName", e.target.value)}
                            required
                        />
                    </span>
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
                    <div className="login-space-between mb-1">
                        <label htmlFor="termscheckbox" className="fs-0-9">
                            <input
                                id="termscheckbox"
                                type="checkbox"
                                name="checkbox"
                                value="remember-me"
                                checked={termsCheckbox}
                                onChange={() =>
                                    setTermsCheckbox((termsCheckbox) => !termsCheckbox)
                                }
                                required
                            />
                            I accept all{" "}
                            <Link to="/signup" className="color-white">
                                Terms and conditions
                            </Link>
                        </label>
                    </div>
                    {error.length > 0 && (
                        <div className="fs-0-9 color-danger my-0-5">{error}</div>
                    )}
                    <input
                        type="submit"
                        value="Sign up"
                        className="btn bg-primary fw-500 fs-0-9 mb-1 width-100 color-black"
                    />
                </form>
                <div className="centered">
                    <Link to="/login" className="fs-0-9 color-white text-none centered">
                        Already have an account
                        <span className="material-icons-outlined"> navigate_next </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export { Signup };
