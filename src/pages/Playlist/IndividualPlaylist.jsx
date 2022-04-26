import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { getIndividualPlaylist } from "../../services";
import { useTheme, useVideo } from "../../context";
import { Loader } from "../../components/Loader/Loader";
import { NoVideosToShow } from "../../components/NoVideosToShow/NoVideosToShow";

function IndividualPlaylist() {
    const { videoState, videoDispatch } = useVideo();
    const { loader, setLoader } = useTheme();
    const { playlistId } = useParams();
    useEffect(() => {
        getIndividualPlaylist(playlistId, videoDispatch, setLoader);
    }, [playlistId, videoDispatch, setLoader]);
    return (
        <div className="container-body color-white p-1">
            {loader ? (
                <Loader />
            ) : (
                <>
                    {videoState.playlist.videos.length > 0 ? (
                        <div className="videocard-display mt-1-5">
                            {videoState.playlist.videos?.map((video) => (
                                <VideoCard
                                    key={video._id}
                                    video={video}
                                    playlistId={videoState.playlist._id}
                                    isPlaylist={true}
                                />
                            ))}
                        </div>
                    ) : (
                        <NoVideosToShow />
                    )}
                </>
            )}
        </div>
    );
}

export { IndividualPlaylist };
