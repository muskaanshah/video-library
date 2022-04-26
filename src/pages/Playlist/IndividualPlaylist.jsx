import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { getIndividualPlaylist } from "../../services";
import { useVideo } from "../../context";

function IndividualPlaylist() {
    const { videoState, videoDispatch } = useVideo();
    const { playlistId } = useParams();
    useEffect(() => {
        getIndividualPlaylist(playlistId, videoDispatch);
    }, [playlistId, videoDispatch]);
    return (
        <div className="container-body color-white p-1">
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
        </div>
    );
}

export { IndividualPlaylist };
