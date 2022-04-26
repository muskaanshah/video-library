import { useEffect } from "react";
import { NoVideosToShow } from "../../components/NoVideosToShow/NoVideosToShow";
import { VideoCardHorizontal } from "../../components/VideoCardHorizontal/VideoCardHorizontal";
import { useVideo } from "../../context";
import { clearHistory, getHistory } from "../../services";

function History() {
    const { videoState, videoDispatch } = useVideo();

    const clearHistoryHandler = () => {
        clearHistory(videoState, videoDispatch);
    };

    useEffect(() => {
        getHistory(videoDispatch);
    }, [videoDispatch]);
    return (
        <div className="container-body color-white p-1">
            {videoState.history.length > 0 ? (
                <>
                    <div className="page-heading-wrapper">
                        <h2 className="page-heading">History</h2>
                        <span
                            className="text-underline cursor-pointer fs-0-9"
                            onClick={clearHistoryHandler}
                        >
                            Clear history
                        </span>
                    </div>
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
