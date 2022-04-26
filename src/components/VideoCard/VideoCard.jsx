import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { calculateDate, calculateViews } from "../../utils";
import "../videocard.css";
import { VideoCardModal } from "./VideoCardModal";
import { AddToPlaylistModal } from "../AddToPlaylistModal/AddToPlaylistModal";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

function VideoCard({ video, playlistId = "", isPlaylist = false }) {
    const {
        _id,
        videoThumbnail,
        videoLength,
        channelThumbnail,
        title,
        channelName,
        views,
        dateOfUpload,
    } = video;
    const [openModal, setOpenModal] = useState(false);
    const [playlistModal, setPlaylistModal] = useState(false);
    const modalRef = useRef();
    const toggleRef = useRef();
    const playlistRef = useRef();
    useOnClickOutside(modalRef, toggleRef, () => setOpenModal(false));
    useOnClickOutside(playlistRef, toggleRef, () => setPlaylistModal(false));
    const navigate = useNavigate();
    return (
        <>
            <div className="video-card" onClick={() => navigate(`/explore/${_id}`)}>
                <div className="videotile-wrapper">
                    <img
                        src={videoThumbnail}
                        className="img-responsive video-tile"
                        alt="video-tile"
                    />
                    <span className="video-time default-theme">{videoLength}</span>
                </div>
                <div className="video-details pt-0-5">
                    <img
                        src={channelThumbnail}
                        className="borderradius-full avatar avatar-sm"
                        alt="dp"
                    />
                    <div>
                        <p className="fw-500 my-0 video-details-header">{title}</p>
                        <p className="text-light fs-0-8 mb-0 mt-0-5">{channelName}</p>
                        <p className="text-light fs-0-7 my-0">
                            {calculateViews(views)} views • {calculateDate(dateOfUpload)}{" "}
                            ago
                        </p>
                    </div>
                    <button
                        ref={toggleRef}
                        className="btn btn-more"
                        onClick={(e) => {
                            e.stopPropagation();
                            setOpenModal((prev) => !prev);
                        }}
                    >
                        <span className="material-icons-round">more_vert</span>
                    </button>
                    {openModal && (
                        <VideoCardModal
                            video={video}
                            setOpenModal={setOpenModal}
                            setPlaylistModal={setPlaylistModal}
                            isPlaylist={isPlaylist}
                            playlistId={playlistId}
                            modalRef={modalRef}
                        />
                    )}
                    {playlistModal && (
                        <AddToPlaylistModal
                            setPlaylistModal={setPlaylistModal}
                            video={video}
                            playlistRef={playlistRef}
                        />
                    )}
                </div>
            </div>
        </>
    );
}

export { VideoCard };
