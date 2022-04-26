import { useEffect, useState } from "react";
import { CreateNewPlaylistModal } from "../../components/AddToPlaylistModal/CreateNewPlaylistModal";
import { useVideo } from "../../context/video-context";
import { getPlaylists } from "../../services";
import { PlaylistTile } from "./components/PlaylistTile";
import "./playlist.css";

function Playlist() {
    const { videoState, videoDispatch } = useVideo();
    const [playlistModal, setPlaylistModal] = useState(false);
    useEffect(() => {
        getPlaylists(videoDispatch);
    }, [videoDispatch]);
    return (
        <div className="container-body p-1">
            <div className="videocard-display mt-1-5">
                {videoState.playlists?.map((playlist) => (
                    <PlaylistTile playlist={playlist} key={playlist._id} />
                ))}
                <div className="new-playlist-div" onClick={() => setPlaylistModal(true)}>
                    + new playlist
                </div>
                {playlistModal && (
                    <CreateNewPlaylistModal setPlaylistModal={setPlaylistModal} />
                )}
            </div>
        </div>
    );
}

export { Playlist };
