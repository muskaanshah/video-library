import { useEffect, useState } from "react";
import { CreateNewPlaylistModal } from "../../components/AddToPlaylistModal/CreateNewPlaylistModal";
import { useVideo } from "../../context/video-context";
import { getPlaylists, clearPlaylists } from "../../services";
import { PlaylistTile } from "./components/PlaylistTile";
import "./playlist.css";

function Playlist() {
    const { videoState, videoDispatch } = useVideo();
    const [playlistModal, setPlaylistModal] = useState(false);
    const clearPlaylist = () => {
        clearPlaylists(videoState, videoDispatch);
    };
    useEffect(() => {
        getPlaylists(videoDispatch);
    }, [videoDispatch]);
    return (
        <div className="container-body p-1 color-white">
            <div className="page-heading-wrapper">
                <h2 className="page-heading">Playlists</h2>
                {videoState.playlists.length > 0 && (
                    <span
                        className="text-underline cursor-pointer fs-0-9"
                        onClick={clearPlaylist}
                    >
                        Delete all playlists
                    </span>
                )}
            </div>
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
