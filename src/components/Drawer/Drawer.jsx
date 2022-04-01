import { NavLink } from "react-router-dom";
import "./drawer.css";

function Drawer() {
	return (
		<div className="drawer bg-grey-dark color-white">
			<NavLink to="/" className="drawer-link">
				<span className="material-icons-round">home</span>
				Home
			</NavLink>
			<NavLink to="/explore" className="drawer-link">
				<span className="material-icons-round">explore</span>
				Explore
			</NavLink>
			<NavLink to="/" className="drawer-link">
				<span className="material-icons-round">playlist_add</span>
				Playlists
			</NavLink>
			<NavLink to="/" className="drawer-link">
				<span className="material-icons-round">thumb_up</span>
				Liked Videos
			</NavLink>
			<NavLink to="/" className="drawer-link">
				<span className="material-icons-round">history</span>
				History
			</NavLink>
			<NavLink to="/" className="drawer-link">
				<span className="material-icons-round">watch_later</span>
				Watch Later
			</NavLink>
		</div>
	);
}

export { Drawer };
