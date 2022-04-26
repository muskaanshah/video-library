import { useEffect } from "react";
import { NoVideosToShow } from "../../components/NoVideosToShow/NoVideosToShow";
import { VideoCardHorizontal } from "../../components/VideoCardHorizontal/VideoCardHorizontal";
import { useVideo } from "../../context";
import { getHistory } from "../../services";

function History() {
    const { videoState, videoDispatch } = useVideo();
    console.log(videoState.history);
    useEffect(() => {
        getHistory(videoDispatch);
    }, [videoDispatch]);
    return (
        <div className="container-body color-white p-1">
            {videoState.history.length > 0 ? (
                <>
                    <h2 className="page-heading">History</h2>
                    <div className="videocard-display mt-1-5">
                        {videoState.history.map((video) => (
                            <VideoCardHorizontal video={video} />
                        ))}
                    </div>
                </>
            ) : (
                <NoVideosToShow />
            )}
        </div>
    );
}

export { History };
