import { useEffect } from "react";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { useVideo } from "../../context";
import { getWatchLater } from "../../services";

function WatchLater() {
    const { videoState, videoDispatch } = useVideo();
    useEffect(() => {
        getWatchLater(videoDispatch);
    }, [videoDispatch]);
    return (
        <div className="container-body color-white p-1">
            <div className="videocard-display mt-1-5">
                {videoState.watchLater.map((video) => (
                    <VideoCard video={video} />
                ))}
            </div>
        </div>
    );
}

export { WatchLater };
