import { VideoCard } from "../../components/VideoCard/VideoCard";

function Liked() {
	return (
		<div className="container-body color-white p-1">
			<div className="videocard-display mt-1-5">
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
			</div>
		</div>
	);
}

export { Liked };
