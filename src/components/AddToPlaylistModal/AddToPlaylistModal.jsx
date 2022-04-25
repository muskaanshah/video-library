import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useVideo } from "../../context/video-context";
import { addToPlaylist, createPlaylist, getPlaylists } from "../../services";
import "./addtoplaylistmodal.css";

function AddToPlaylistModal({ setPlaylistModal, video }) {
    const [addPlaylist, setAddPlaylist] = useState(false);
    const [playlistName, setPlaylistName] = useState("");
    const { videoState, videoDispatch } = useVideo();
    const token = localStorage.getItem("encodedToken");
    const navigate = useNavigate();

    const createPlaylistHandler = () => {
        if (token) {
            createPlaylist(playlistName, videoDispatch);
        } else navigate("/login");
        setPlaylistName("");
    };

    const addToPlaylistHandler = (id) => {
        if (token) {
            addToPlaylist(video, id, videoDispatch);
        } else navigate("/login");
        setPlaylistModal(false);
    };

    useEffect(() => {
        getPlaylists(videoDispatch);
    }, [videoDispatch]);
    return (
        <div className="addtoplaylist-modal-wrapper" onClick={(e) => e.stopPropagation()}>
            <div className="addtoplaylist-modal py-0-5">
                {videoState.playlists?.map((playlist) => (
                    <p
                        className="videocard-modal-action my-0"
                        onClick={() => addToPlaylistHandler(playlist._id)}
                        key={playlist._id}
                    >
                        <span className="material-icons-outlined">playlist_add</span>
                        {playlist.title}
                    </p>
                ))}
                {addPlaylist && (
                    <input
                        type="text"
                        placeholder="Playlist Name"
                        className="add-playist-input"
                        autoFocus
                        value={playlistName}
                        onChange={(e) => {
                            e.stopPropagation();
                            setPlaylistName(e.target.value);
                        }}
                        onKeyPress={(e) => {
                            if (e.key === "Enter") createPlaylistHandler();
                        }}
                    />
                )}
                <p
                    className="videocard-modal-action my-0"
                    onClick={(e) => {
                        e.stopPropagation();
                        setAddPlaylist(true);
                    }}
                >
                    <span className="material-icons-outlined">add</span> CREATE NEW
                    PLAYLIST
                </p>
            </div>
        </div>
    );
}

export { AddToPlaylistModal };
