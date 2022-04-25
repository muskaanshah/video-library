import { useParams } from "react-router-dom";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { useVideo } from "../../context";

function IndividualPlaylist() {
    const { videoState } = useVideo();
    const { playlistId } = useParams();
    const playlist = videoState.playlists.find((item) => item._id === playlistId);
    return (
        <div className="container-body color-white p-1">
            <div className="videocard-display mt-1-5">
                {playlist.videos?.map((video) => (
                    <VideoCard
                        key={video._id}
                        video={video}
                        playlistId={playlist._id}
                        isPlaylist={true}
                    />
                ))}
            </div>
        </div>
    );
}

export { IndividualPlaylist };
