import "./singlevideo.css";

function SingleVideo() {
	return (
		<div className="container-body color-white">
			<div className="pt-2 text-center">
				<iframe
					width="75%"
					src="https://www.youtube.com/embed/R9I85RhI7Cg"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					className="iframe-video mx-auto"
					allowfullscreen
				></iframe>
				<div className="singlevideo-info mx-auto">
					<h2>How to play Splendor within 10 minutes | By Kaylie Advani</h2>
					<div className="singlevideo-viewcount-wrapper">
						<p className="my-0 text-light singlevideo-viewcount">
							85K views • 1 month ago
						</p>
						<p className="singlevideo-icon-wrapper my-0">
							<button className="btn btn-action">
								<span className="material-icons-outlined">thumb_up</span>120
							</button>
							<div>
								<button className="btn btn-action">
									<span className="material-icons-outlined">watch_later</span>
									WATCH LATER
								</button>
								<button className="btn btn-action">
									<span className="material-icons-outlined">playlist_add</span>
									SAVE
								</button>
								<button className="btn btn-action">
									<span className="material-icons-outlined">share</span>
									SHARE
								</button>
							</div>
							<button className="btn btn-more-singleproduct">
								<span className="material-icons-round">more_vert</span>
							</button>
						</p>
					</div>
					<div className="divider-black bg-white mt-1"></div>
					<div className="channel-details mt-1">
						<img
							src="https://picsum.photos/150"
							className="borderradius-full avatar avatar-sm"
							alt="dp"
						/>
						<div>
							<h3 className="my-0">Gameistry</h3>
							<p className="text-light fs-0-9 my-0">22.1M subscribers</p>
							<p className="mt-1-5 width-80">
								In-depth explanation of Event Loop, Web APIs, MicroTask Callback
								Queue, and how JavaScript works asynchronously in the web
								browser. Understand how setTimeout works behind the scenes along
								with fetch and event listeners.{" "}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export { SingleVideo };
