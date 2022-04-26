import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import { PlaylistModal } from "./PlaylistModal";

function PlaylistTile({ playlist }) {
    const [playlistModal, setPlaylistModal] = useState(false);
    const navigate = useNavigate();
    const modalRef = useRef();
    const toggleRef = useRef();
    useOnClickOutside(modalRef, toggleRef, () => setPlaylistModal(false));
    return (
        <div
            className="playlist-tile color-white"
            onClick={() => {
                navigate(`/playlist/${playlist._id}`);
            }}
        >
            <div className="playlist-img-wrapper">
                <img
                    src={`${
                        playlist.videos.length > 0
                            ? playlist.videos[0].videoThumbnail
                            : "https://picsum.photos/270/150"
                    }`}
                    className="img-responsive playlist-img"
                    alt="playlist-tile"
                />
                <p className="playlist-number my-0 default-theme">
                    <span>{playlist.videos.length}</span>
                    <span className="material-icons-outlined">playlist_play</span>
                </p>
            </div>
            <div className="playlistinfo">
                <p>{playlist.title}</p>
                <button
                    className="btn btn-more-playlist bg-transparent color-white"
                    onClick={(e) => {
                        e.stopPropagation();
                        setPlaylistModal((prev) => !prev);
                    }}
                    ref={toggleRef}
                >
                    <span className="material-icons-round">more_vert</span>
                </button>
            </div>
            {playlistModal && <PlaylistModal playlist={playlist} modalRef={modalRef} />}
        </div>
    );
}

export { PlaylistTile };
