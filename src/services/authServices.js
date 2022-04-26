import axios from "axios";
import { ACTION_TYPE } from "../utils";

const loginUser = async (
    email,
    password,
    setToken,
    setUser,
    setError,
    navigate,
    location,
    alertDispatch
) => {
    const from = location.state?.from?.pathname || "/";
    try {
        const res = await axios.post("/api/auth/login", {
            email,
            password,
        });
        if (res.status === 200) {
            setError("");
            setToken(res.data.encodedToken);
            localStorage.setItem("encodedToken", res.data.encodedToken);
            setUser(res.data.foundUser);
            localStorage.setItem("user", JSON.stringify(res.data.foundUser));
            navigate(from, { replace: true });
            alertDispatch({
                type: ACTION_TYPE.ACTIVATE_ALERT,
                payload: {
                    alertType: "success",
                    alertMsg: "Logged in succesfully",
                },
            });
        }
    } catch (err) {
        setError("The credentials you entered are invalid.");
    }
};

const signUpUser = async (
    email,
    password,
    firstName,
    lastName,
    setToken,
    setUser,
    setError,
    navigate,
    location,
    alertDispatch
) => {
    const from = location.state?.from?.pathname || "/";
    try {
        const res = await axios.post("/api/auth/signup", {
            email,
            password,
            firstName,
            lastName,
        });
        if (res.status === 201) {
            setError("");
            setToken(res.data.encodedToken);
            localStorage.setItem("encodedToken", res.data.encodedToken);
            setUser(res.data.createdUser);
            localStorage.setItem("user", JSON.stringify(res.data.createdUser));
            navigate(from, { replace: true });
            alertDispatch({
                type: ACTION_TYPE.ACTIVATE_ALERT,
                payload: {
                    alertType: "success",
                    alertMsg: "Signed up successfully",
                },
            });
        }
    } catch (err) {
        setError("Email already exists");
    }
};

export { loginUser, signUpUser };
