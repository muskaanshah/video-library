import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context";
import { useVideo } from "../../context/video-context";
import { addToPlaylist, createPlaylist, getPlaylists } from "../../services";
import "./addtoplaylistmodal.css";

function AddToPlaylistModal({ setPlaylistModal, video, playlistRef }) {
    const [addPlaylist, setAddPlaylist] = useState(false);
    const [playlistName, setPlaylistName] = useState("");
    const { videoState, videoDispatch } = useVideo();
    const { alertDispatch } = useTheme();
    const token = localStorage.getItem("encodedToken");
    const navigate = useNavigate();

    const createPlaylistHandler = () => {
        if (token) {
            createPlaylist(playlistName, videoDispatch);
        } else navigate("/login");
        setPlaylistName("");
        setAddPlaylist(false);
    };

    const addToPlaylistHandler = (id) => {
        if (token) {
            addToPlaylist(video, id, videoDispatch, alertDispatch);
        } else navigate("/login");
        setPlaylistModal(false);
    };

    useEffect(() => {
        getPlaylists(videoDispatch);
    }, [videoDispatch]);
    return (
        <div className="addtoplaylist-modal-wrapper" onClick={(e) => e.stopPropagation()}>
            <div className="addtoplaylist-modal py-0-5 color-white" ref={playlistRef}>
                <p className="videocard-modal-action my-0">Save to</p>
                {videoState.playlists?.map((playlist) => {
                    const isVideoInplaylist = playlist.videos?.find(
                        (vid) => vid._id === video._id
                    );
                    return (
                        <p
                            className={`videocard-modal-action my-0 ${
                                isVideoInplaylist
                                    ? "text-light cursor-disabled"
                                    : "cursor-pointer"
                            }`}
                            onClick={() => addToPlaylistHandler(playlist._id)}
                            key={playlist._id}
                        >
                            {isVideoInplaylist ? (
                                <span className="material-icons-outlined">
                                    playlist_add_check
                                </span>
                            ) : (
                                <span className="material-icons-outlined">
                                    playlist_add
                                </span>
                            )}
                            {playlist.title}
                        </p>
                    );
                })}
                {addPlaylist && (
                    <input
                        type="text"
                        placeholder="Playlist Name"
                        className="add-playist-input"
                        value={playlistName}
                        onChange={(e) => {
                            e.stopPropagation();
                            setPlaylistName(e.target.value);
                        }}
                        onKeyPress={(e) => {
                            if (e.key === "Enter" && playlistName)
                                createPlaylistHandler();
                        }}
                        autoFocus
                    />
                )}
                {playlistName ? (
                    <p
                        className="videocard-modal-action my-0"
                        onClick={createPlaylistHandler}
                    >
                        <span className="material-icons-outlined">done</span> DONE
                    </p>
                ) : (
                    <p
                        className="videocard-modal-action my-0"
                        onClick={(e) => setAddPlaylist(true)}
                    >
                        <span className="material-icons-outlined">add</span> CREATE NEW
                        PLAYLIST
                    </p>
                )}
                <button
                    className="btn bg-transparent playlist-modal-close color-white p-0-5"
                    onClick={() => {
                        setPlaylistModal(false);
                        setPlaylistName("");
                    }}
                >
                    <span className="material-icons-outlined">close</span>
                </button>
            </div>
        </div>
    );
}

export { AddToPlaylistModal };
