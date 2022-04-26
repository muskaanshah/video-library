import { useEffect } from "react";
import { NoVideosToShow } from "../../components/NoVideosToShow/NoVideosToShow";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { useVideo } from "../../context";
import { getLikes } from "../../services";

function Liked() {
    const { videoState, videoDispatch } = useVideo();
    useEffect(() => {
        getLikes(videoDispatch);
    }, [videoDispatch]);
    return (
        <div className="container-body color-white p-1">
            {videoState.likedVideos.length > 0 ? (
                <div className="videocard-display mt-1-5">
                    {videoState.likedVideos.map((video) => (
                        <VideoCard video={video} />
                    ))}
                </div>
            ) : (
                <NoVideosToShow />
            )}
        </div>
    );
}

export { Liked };
