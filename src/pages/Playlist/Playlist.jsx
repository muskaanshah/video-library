import { useEffect, useState, useRef } from "react";
import { CreateNewPlaylistModal } from "../../components/AddToPlaylistModal/CreateNewPlaylistModal";
import { Loader } from "../../components/Loader/Loader";
import { useVideo, useTheme } from "../../context";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { getPlaylists, clearPlaylists } from "../../services";
import { PlaylistTile } from "./components/PlaylistTile";
import "./playlist.css";

function Playlist() {
    const { videoState, videoDispatch } = useVideo();
    const { loader, setLoader } = useTheme();
    const [playlistModal, setPlaylistModal] = useState(false);
    const clearPlaylist = () => {
        clearPlaylists(videoState, videoDispatch, setLoader);
    };
    const modalRef = useRef();
    const toggleRef = useRef();
    useOnClickOutside(modalRef, toggleRef, () => setPlaylistModal(false));
    useEffect(() => {
        getPlaylists(videoDispatch, setLoader);
    }, [videoDispatch, setLoader]);
    return (
        <div className="container-body p-1 color-white">
            {loader ? (
                <Loader />
            ) : (
                <>
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
                        <div
                            className="new-playlist-div"
                            onClick={() => setPlaylistModal(true)}
                            ref={toggleRef}
                        >
                            + New playlist
                        </div>
                        {playlistModal && (
                            <CreateNewPlaylistModal
                                setPlaylistModal={setPlaylistModal}
                                modalRef={modalRef}
                            />
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export { Playlist };
