import { NavLink } from "react-router-dom";
import "./drawer.css";

function Drawer({drawer, setDrawer}) {
	// const {theme} = useTheme();
	return (
		<div className={`drawer bg-grey-dark color-white ${drawer && "drawer-active"}`}>
			<NavLink
				to="/"
				className={({ isActive }) =>
					isActive ? "active-link drawer-link" : "drawer-link"
				}
				onClick={() => setDrawer(false)}
			>
				<span className="material-icons-round">home</span>
				Home
			</NavLink>
			<NavLink
				to="/explore"
				className={({ isActive }) =>
					isActive ? "active-link drawer-link" : "drawer-link"
				}
				onClick={() => setDrawer(false)}
			>
				<span className="material-icons-round">explore</span>
				Explore
			</NavLink>
			<NavLink
				to="/playlist"
				className={({ isActive }) =>
					isActive ? "active-link drawer-link" : "drawer-link"
				}
				onClick={() => setDrawer(false)}
			>
				<span className="material-icons-round">playlist_add</span>
				Playlists
			</NavLink>
			<NavLink
				to="/liked"
				className={({ isActive }) =>
					isActive ? "active-link drawer-link" : "drawer-link"
				}
				onClick={() => setDrawer(false)}
			>
				<span className="material-icons-round">thumb_up</span>
				Liked Videos
			</NavLink>
			<NavLink
				to="/history"
				className={({ isActive }) =>
					isActive ? "active-link drawer-link" : "drawer-link"
				}
				onClick={() => setDrawer(false)}
			>
				<span className="material-icons-round">history</span>
				History
			</NavLink>
			<NavLink
				to="/watchlater"
				className={({ isActive }) =>
					isActive ? "active-link drawer-link" : "drawer-link"
				}
				onClick={() => setDrawer(false)}
			>
				<span className="material-icons-round">watch_later</span>
				Watch Later
			</NavLink>
		</div>
	);
}

export { Drawer };
