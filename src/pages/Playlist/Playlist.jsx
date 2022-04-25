import { useEffect } from "react";
import { useVideo } from "../../context/video-context";
import { getPlaylists } from "../../services";
import { PlaylistTile } from "./components/PlaylistTile";
import "./playlist.css";

function Playlist() {
    const { videoState, videoDispatch } = useVideo();
    console.log({ videoState });
    useEffect(() => {
        getPlaylists(videoDispatch);
    }, [videoDispatch]);
    return (
        <div className="container-body p-1">
            <div className="videocard-display mt-1-5">
                {videoState.playlists?.map((playlist) => (
                    <PlaylistTile playlist={playlist} key={playlist._id} />
                ))}
            </div>
        </div>
    );
}

export { Playlist };
