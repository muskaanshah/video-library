import "../videocard.css";

function VideoCardHorizontal() {
	return (
		<>
			<div className="video-card-horizontal">
				<div className="videotile-wrapper">
					<img
						src="https://picsum.photos/270/150"
						className="img-responsive video-tile"
						alt="video-tile"
					/>
					<span className="video-time default-theme">4:10</span>
				</div>
				<div className="video-details-horizontal-wrapper">
					<div className="video-details-horizontal">
						<div>
							<p className="fw-500 my-0 video-details-header">
								How to play Splendor within 10 minutes | By Kaylie Advani
							</p>
							<p className="text-light fs-0-8 mb-0 mt-0-5">Gameistry</p>
							<p className="text-light fs-0-8 my-0">85K views • 1 month ago</p>
						</div>
						<button className="btn btn-more-playlist bg-transparent py-0 color-white">
							<span className="material-icons-round">more_vert</span>
						</button>
					</div>
					<p className="video-desc fs-0-8">
						In-depth explanation of Event Loop, Web APIs, MicroTask Callback
						Queue, and how JavaScript works asynchronously in the web browser.
						Understand how setTimeout works behind the scenes along with fetch
						and event listeners.
					</p>
				</div>
			</div>
		</>
	);
}

export { VideoCardHorizontal };
