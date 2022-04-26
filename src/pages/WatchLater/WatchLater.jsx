import { useEffect } from "react";
import { NoVideosToShow } from "../../components/NoVideosToShow/NoVideosToShow";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { useVideo } from "../../context";
import { clearWatchLater, getWatchLater } from "../../services";

function WatchLater() {
    const { videoState, videoDispatch } = useVideo();
    const clearWatchLaterHandler = () => {
        clearWatchLater(videoState, videoDispatch);
    };
    useEffect(() => {
        getWatchLater(videoDispatch);
    }, [videoDispatch]);
    return (
        <div className="container-body color-white p-1">
            {videoState.watchLater.length > 0 ? (
                <>
                    <div className="page-heading-wrapper">
                        <h2 className="page-heading">Watch Later</h2>
                        <span
                            className="text-underline cursor-pointer fs-0-9"
                            onClick={clearWatchLaterHandler}
                        >
                            Clear watch later
                        </span>
                    </div>
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
