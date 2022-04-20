import { VideoCard } from "../../components/VideoCard/VideoCard";
import { useVideo } from "../../context";
import { FilterSection } from "./components/FilterSection";
import "./explore.css";

function Explore() {
    const { videoState } = useVideo();
    return (
        <div className="container-body color-white p-1">
            <FilterSection />
            <div className="videocard-display mt-1-5">
                {videoState.videos.map((video) => (
                    <VideoCard key={video._id} video={video} />
                ))}
            </div>
        </div>
    );
}

export { Explore };
