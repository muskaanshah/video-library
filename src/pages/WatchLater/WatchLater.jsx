import { useEffect } from "react";
import { NoVideosToShow } from "../../components/NoVideosToShow/NoVideosToShow";
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
            {videoState.watchLater.length > 0 ? (
                <>
                    <h2 className="page-heading">Watch Later</h2>
                    <div className="videocard-display mt-1-5">
                        {videoState.watchLater.map((video) => (
                            <VideoCard video={video} />
                        ))}
                    </div>
                </>
            ) : (
                <NoVideosToShow />
            )}
        </div>
    );
}

export { WatchLater };
