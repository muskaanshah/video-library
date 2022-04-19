import axios from "axios";

const loginUser = async (email, password, setToken, setUser, setError) => {
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
            localStorage.setItem("user", res.data.foundUser);
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
    setError
) => {
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
            localStorage.setItem("user", res.data.createdUser);
        }
    } catch (err) {
        setError("Email already exists");
    }
};

export { loginUser, signUpUser };
