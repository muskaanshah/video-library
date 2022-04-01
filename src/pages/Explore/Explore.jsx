import { VideoCard } from "../../components/VideoCard/VideoCard";
import { FilterSection } from "./components/FilterSection";
import "./explore.css";

function Explore() {
	return (
		<div className="container-body color-white p-1">
			<FilterSection />
			<VideoCard />
		</div>
	);
}

export { Explore };
