import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context";
import { Drawer } from "../Drawer/Drawer";
import { avatar } from "../../assets";
import "./navbar.css";

function Navbar() {
    const [drawer, setDrawer] = useState(false);
    const { theme, toggleThemeHandler } = useTheme();
    const token  = localStorage.getItem("encodedToken");
    return (
        <>
            <div className={`navbar bg-grey-dark`}>
                <div>
                    <button
                        className={`hamburger ${drawer && "active"}`}
                        onClick={() => setDrawer((prev) => !prev)}
                    >
                        <span className="ham-line"></span>
                        <span className="ham-line"></span>
                        <span className="ham-line"></span>
                    </button>
                    <img
                        className="nav-logo-img mx-1"
                        alt="logo"
                        src="https://res.cloudinary.com/ecommerce-muskaan/image/upload/v1647541606/e-commerce/dice-logo_sbyevn.png"
                    />
                </div>
                <span className="search">
                    <input
                        type="text"
                        className="input-text input-text-nav input-search mx-1"
                        placeholder="Search"
                    />
                </span>
                <div className="centered">
                    <button
                        className="btn bg-transparent m-0 p-0"
                        onClick={() => toggleThemeHandler()}
                    >
                        <span className="material-icons-outlined">
                            {`${theme === "dark" ? "light_mode" : "nightlight"}`}
                        </span>
                    </button>
                    <Link to="/login" className="text-none">
                        {token ? (
                            <span className="avatar-default-sm borderradius-full bg-primary color-black mx-1 ">
                                AT
                            </span>
                        ) : (
                            <img src={avatar} style={{maxWidth: "2.5rem", maxHeight: "2.5rem"}} alt="login" />
                        )}
                    </Link>
                </div>
            </div>
            <Drawer drawer={drawer} setDrawer={setDrawer} />
        </>
    );
}

export { Navbar };
