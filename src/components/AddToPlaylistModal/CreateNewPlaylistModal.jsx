import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useVideo } from "../../context/video-context";
import { createPlaylist } from "../../services";
import "./addtoplaylistmodal.css";

function CreateNewPlaylistModal({ setPlaylistModal }) {
    const [playlistName, setPlaylistName] = useState("");
    const { videoDispatch } = useVideo();
    const token = localStorage.getItem("encodedToken");
    const navigate = useNavigate();

    const createPlaylistHandler = () => {
        if (token) {
            createPlaylist(playlistName, videoDispatch);
        } else navigate("/login");
        setPlaylistName("");
    };
    return (
        <div className="addtoplaylist-modal-wrapper" onClick={(e) => e.stopPropagation()}>
            <div className="addtoplaylist-modal py-0-5 color-white">
                <p className="fw-400 py-0-5 px-1 my-0">Create new playlist</p>
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
                        if (e.key === "Enter") {
                            createPlaylistHandler();
                            setPlaylistModal(false);
                        }
                    }}
                    autoFocus
                />
            </div>
        </div>
    );
}

export { CreateNewPlaylistModal };
