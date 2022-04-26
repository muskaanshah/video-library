import { useEffect } from "react";
import { Loader } from "../../components/Loader/Loader";
import { NoVideosToShow } from "../../components/NoVideosToShow/NoVideosToShow";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { useTheme, useVideo } from "../../context";
import { clearLikedVideos, getLikes } from "../../services";

function Liked() {
    const { videoState, videoDispatch } = useVideo();
    const { loader, setLoader } = useTheme();
    const clearLikedVideosHandler = () => {
        clearLikedVideos(videoState, videoDispatch, setLoader);
    };
    useEffect(() => {
        getLikes(videoDispatch, setLoader);
    }, [videoDispatch, setLoader]);
    return (
        <div className="container-body color-white p-1">
            {loader ? (
                <Loader />
            ) : (
                <>
                    {videoState.likedVideos.length > 0 ? (
                        <>
                            <div className="page-heading-wrapper">
                                <h2 className="page-heading">Liked videos</h2>
                                <span
                                    className="text-underline cursor-pointer fs-0-9"
                                    onClick={clearLikedVideosHandler}
                                >
                                    Clear
                                </span>
                            </div>
                            <div className="videocard-display mt-1-5">
                                {videoState.likedVideos.map((video) => (
                                    <VideoCard video={video} />
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

export { Liked };
