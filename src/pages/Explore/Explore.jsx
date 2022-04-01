import { VideoCard } from "../../components/VideoCard/VideoCard";
import { FilterSection } from "./components/FilterSection";
import "./explore.css";

function Explore() {
	return (
		<div className="container-body color-white p-1">
			<FilterSection />
			<div className="videocard-display mt-1-5">
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
			</div>
		</div>
	);
}

export { Explore };
