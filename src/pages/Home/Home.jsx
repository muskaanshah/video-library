import { bannerimg, bannerimgdesktop } from "../../assets";
import "./home.css";

function Home() {
	return (
		<div className="container-body bg-black">
			<div className="banner-wrapper">
				<picture>
					<source media="(min-width: 700px)" srcset={bannerimgdesktop} />
					<img
						src={bannerimg}
						className="img-responsive img-banner"
						alt="banner"
					/>
				</picture>
				<div className="banner-overlay">
					<h2 className="banner-info-heading color-white my-0">
						The rebirth of board games and the new social revolution | Drew Blas
						| TEDxTopeka
					</h2>
					<p className="color-white fw-300 fs-0-8 mt-0-5">
						13 mins | 6 years ago
					</p>
					<button className="btn bg-primary borderradius-0-5 color-black fw-500 centered p-0-5 btn-banner-watchnow">
						<span className="material-icons-round">play_arrow</span>
						<span className="fs-0-9">Watch now</span>
					</button>
				</div>
			</div>
			<div className="color-white px-1">
				<h2 className="text-center pt-2">About BoardFlix</h2>
				<p className="about-body mx-1">
					BoardFlix is a video streaming platform which is used to understand
					the gameplay of board games. It offers tutorials, live streaming of
					games, different strategies, different approaches, the uses and other
					such various techniques. Our main aim is for users to understand the
					importance of playing board games and sharpening the skills.
				</p>
				<button className="btn bg-primary borderradius-0-5 color-black fw-500 centered p-1 fs-0-9 mx-auto mt-2">
					Explore our collection
				</button>
			</div>
		</div>
	);
}

export { Home };
