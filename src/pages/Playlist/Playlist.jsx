import { PlaylistTile } from "./components/PlaylistTile";
import "./playlist.css";

function Playlist() {
	return (
		<div className="container-body p-1">
			<div className="videocard-display mt-1-5">
				<PlaylistTile />
			</div>
		</div>
	);
}

export { Playlist };
