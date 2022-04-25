import { NavLink } from "react-router-dom";
import "./drawer.css";

function Drawer({ drawer, setDrawer }) {
    return (
        <div className={`drawer bg-grey-dark color-white ${drawer && "drawer-active"}`}>
            <span onClick={() => setDrawer(false)}>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "active-link drawer-link" : "drawer-link"
                    }
                >
                    <span className="material-icons-round">home</span>
                    Home
                </NavLink>
            </span>
            <span onClick={() => setDrawer(false)}>
                <NavLink
                    to="/explore"
                    className={({ isActive }) =>
                        isActive ? "active-link drawer-link" : "drawer-link"
                    }
                >
                    <span className="material-icons-round">explore</span>
                    Explore
                </NavLink>
            </span>
            <span onClick={() => setDrawer(false)}>
                <NavLink
                    to="/playlist"
                    className={({ isActive }) =>
                        isActive ? "active-link drawer-link" : "drawer-link"
                    }
                >
                    <span className="material-icons-round">playlist_add</span>
                    Playlists
                </NavLink>
            </span>
            <span onClick={() => setDrawer(false)}>
                <NavLink
                    to="/liked"
                    className={({ isActive }) =>
                        isActive ? "active-link drawer-link" : "drawer-link"
                    }
                >
                    <span className="material-icons-round">thumb_up</span>
                    Liked Videos
                </NavLink>
            </span>
            <span onClick={() => setDrawer(false)}>
                <NavLink
                    to="/history"
                    className={({ isActive }) =>
                        isActive ? "active-link drawer-link" : "drawer-link"
                    }
                >
                    <span className="material-icons-round">history</span>
                    History
                </NavLink>
            </span>
            <span onClick={() => setDrawer(false)}>
                <NavLink
                    to="/watchlater"
                    className={({ isActive }) =>
                        isActive ? "active-link drawer-link" : "drawer-link"
                    }
                >
                    <span className="material-icons-round">watch_later</span>
                    Watch Later
                </NavLink>
            </span>
        </div>
    );
}

export { Drawer };
