function PlaylistVideoModal() {
	return (
		<div className="bg-grey-dark videocard-modal py-0-5">
			<p className="videocard-modal-action my-0">
				<span className="material-icons-outlined">watch_later</span>
				<span>WATCH LATER</span>
			</p>
			<p className="videocard-modal-action my-0">
				<span className="material-icons-outlined">playlist_add</span>
				<span>REMOVE FROM PLAYLIST</span>
			</p>
			<p className="videocard-modal-action my-0">
				<span className="material-icons-outlined">share</span>
				<span>SHARE</span>
			</p>
		</div>
	);
}

export { PlaylistVideoModal };
