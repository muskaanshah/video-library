import "./addtoplaylistmodal.css";

function AddToPlaylistModal() {
	return (
		<div className="addtoplaylist-modal py-0-5">
			<p className="videocard-modal-action my-0">
				<span className="material-icons-outlined">playlist_add</span>RANDOM
			</p>
			<p className="videocard-modal-action my-0">
				<span className="material-icons-outlined">add</span> CREATE NEW PLAYLIST
			</p>
		</div>
	);
}

export { AddToPlaylistModal };
