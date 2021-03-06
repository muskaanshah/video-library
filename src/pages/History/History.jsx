import { useEffect } from "react";
import { NoVideosToShow } from "../../components/NoVideosToShow/NoVideosToShow";
import { VideoCardHorizontal } from "../../components/VideoCardHorizontal/VideoCardHorizontal";
import { Loader } from "../../components/Loader/Loader";
import { useVideo, useTheme } from "../../context";
import { clearHistory, getHistory } from "../../services";

function History() {
    const { videoState, videoDispatch } = useVideo();
    const { loader, setLoader } = useTheme();

    const clearHistoryHandler = () => {
        clearHistory(videoState, videoDispatch, setLoader);
    };
    useEffect(() => {
        getHistory(videoDispatch, setLoader);
    }, [videoDispatch, setLoader]);
    return (
        <div className="container-body color-white p-1">
            {loader ? (
                <Loader />
            ) : (
                <>
                    {videoState.history.length > 0 ? (
                        <>
                            <div className="page-heading-wrapper">
                                <div>
                                    <h2 className="page-heading">History</h2>
                                    <span className="fs-0-8">
                                        {`${videoState.history.length} ${
                                            videoState.history.length === 1
                                                ? "video"
                                                : "videos"
                                        }`}
                                    </span>
                                </div>
                                <span
                                    className="text-underline cursor-pointer fs-0-9"
                                    onClick={clearHistoryHandler}
                                >
                                    Clear
                                </span>
                            </div>
                            <div className="videocard-display videocard-display-history mt-1-5">
                                {videoState.history.map((video) => (
                                    <VideoCardHorizontal video={video} />
                                ))}
                            </div>
                        </>
                    ) : (
                        <NoVideosToShow />
                    )}
                </>
            )}
        </div>
    );
}

export { History };
