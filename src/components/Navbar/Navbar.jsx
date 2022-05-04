import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth, useTheme, useVideo } from "../../context";
import { Drawer } from "../Drawer/Drawer";
import { avatar } from "../../assets";
import "./navbar.css";
import { ACTION_TYPE } from "../../utils";
import { SearchList } from "./SearchList";

function Navbar() {
    const [drawer, setDrawer] = useState(false);
    const { theme, toggleThemeHandler } = useTheme();
    const { token, user } = useAuth();
    const { videoState, videoDispatch } = useVideo();
    const navigate = useNavigate();
    const location = useLocation();
    const searchHandler = () => {
        videoDispatch({ type: ACTION_TYPE.SEARCH_VIDEOS });
        navigate("/explore");
        videoDispatch({
            type: "OPEN_CLOSE_SEARCH_MODAL",
            payload: { value: false },
        });
    };

    useEffect(() => {
        if (location.pathname !== "/explore") {
            //no filters applied when user shifts page
            videoDispatch({
                type: ACTION_TYPE.SEARCH_TEXT,
                payload: { value: "" },
            });
            videoDispatch({ type: ACTION_TYPE.SEARCH_VIDEOS });
        }
    }, [location.pathname, videoDispatch]);
    return (
        <>
            <div className="navbar bg-grey-dark">
                <div className="nav-logo-wrapper cursor-pointer centered">
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
                        onClick={() => navigate("/")}
                    />
                    <span
                        className="ls-2 color-primary fw-700 fs-2 cursor-pointer"
                        onClick={() => navigate("/")}
                    >
                        BOARDFLIX
                    </span>
                </div>
                <span className="search">
                    <div className="search-wrapper">
                        <input
                            type="text"
                            className="input-text input-search"
                            placeholder="Search"
                            value={videoState.searchText}
                            onChange={(e) => {
                                videoDispatch({
                                    type: ACTION_TYPE.SEARCH_TEXT,
                                    payload: { value: e.target.value },
                                });
                                videoDispatch({
                                    type: "OPEN_CLOSE_SEARCH_MODAL",
                                    payload: { value: true },
                                });
                            }}
                            onKeyPress={(e) => {
                                if (e.key === "Enter") searchHandler();
                            }}
                        />
                        <button
                            className={`btn btn-search bg-transparent cursor-pointer color-white p-0 mr-0-5 ${
                                videoState.searchText.length > 0
                                    ? "visibility-shown"
                                    : "visibility-hidden"
                            }`}
                            onClick={searchHandler}
                        >
                            <span className="material-icons-outlined">search</span>
                        </button>
                        {(videoState.searchModal ||
                            videoState.searchText.length === 0) && <SearchList />}
                    </div>
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
                    {token ? (
                        <Link to="/user" className="text-none">
                            <span className="avatar-default-sm borderradius-full bg-primary color-black mx-1 ">
                                {user?.firstName?.charAt(0)}
                            </span>
                        </Link>
                    ) : (
                        <Link to="/login" className="text-none">
                            <img
                                src={avatar}
                                style={{ maxWidth: "2.5rem", maxHeight: "2.5rem" }}
                                alt="login"
                            />
                        </Link>
                    )}
                </div>
            </div>
            <Drawer drawer={drawer} setDrawer={setDrawer} />
        </>
    );
}

export { Navbar };
