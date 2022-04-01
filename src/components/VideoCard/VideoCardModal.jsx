function VideoCardModal() {
	return (
		<div className="bg-grey-dark videocard-modal py-0-5">
			<p className="videocard-modal-action my-0">
				<span className="material-icons-outlined">watch_later</span>
				<span>Save to watch later</span>
			</p>
			<p className="videocard-modal-action my-0">
				<span className="material-icons-outlined">playlist_add</span>
				<span>Save to playlist</span>
			</p>
			<p className="videocard-modal-action my-0">
				<span className="material-icons-outlined">share</span>
				<span>Share</span>
			</p>
		</div>
	);
}

export { VideoCardModal };
