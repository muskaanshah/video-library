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
                {videoState.videos.length > 0 ? (
                    videoState.videos.map((video) => (
                        <VideoCard key={video._id} video={video} />
                    ))
                ) : (
                    <div className="centered width-100">
                        <h3>No videos to show for the selected categories</h3>
                    </div>
                )}
            </div>
        </div>
    );
}

export { Explore };
