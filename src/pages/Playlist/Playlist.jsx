import { PlaylistTile } from "./components/PlaylistTile";
import "./playlist.css";

function Playlist() {
	return (
		<div className="container-body">
			<div className="p-1">
				<PlaylistTile />
			</div>
		</div>
	);
}

export { Playlist };
