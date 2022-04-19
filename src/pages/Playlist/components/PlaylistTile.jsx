function PlaylistTile() {
	return (
		<div className="playlist-tile color-white">
			<div className="playlist-img-wrapper">
				<img
					src="https://picsum.photos/270/150"
					className="img-responsive playlist-img"
					alt="playlist-tile"
				/>
				<p className="playlist-number my-0 default-theme">
					<span>3</span>
					<span className="material-icons-outlined">playlist_play</span>
				</p>
			</div>
			<div className="playlistinfo">
				<p>Playlist name</p>
				<button className="btn btn-more-playlist bg-transparent color-white">
					<span className="material-icons-round">more_vert</span>
				</button>
			</div>
		</div>
	);
}

export { PlaylistTile };
