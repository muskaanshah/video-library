import "./videocard.css";

function VideoCard() {
	return (
		<>
			<div className="video-card">
				<div className="videotile-wrapper">
					<img
						src="https://picsum.photos/270/150"
						className="img-responsive video-tile"
						alt="video-tile"
					/>
					<span className="video-time">4:10</span>
				</div>
				<div className="video-details pt-0-5">
					<img
						src="https://picsum.photos/150"
						className="borderradius-full avatar avatar-sm"
						alt="dp"
					/>
					<div>
						<p className="fw-500 my-0 video-details-header">
							How to play Splendor within 10 minutes | By Kaylie Advani
						</p>
						<p className="text-light fs-0-8 mb-0 mt-0-5">Gameistry</p>
						<p className="text-light fs-0-8 my-0">85K views • 1 month ago</p>
					</div>
					<button className="btn btn-more">
						<span className="material-icons-round">more_vert</span>
					</button>
				</div>
			</div>
		</>
	);
}

export { VideoCard };
