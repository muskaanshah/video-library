import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HistoryVideoModal } from "../../pages/History/components/HistoryVideoModal";
import { calculateDate, calculateViews } from "../../utils";
import { AddToPlaylistModal } from "../AddToPlaylistModal/AddToPlaylistModal";
import "../videocard.css";

function VideoCardHorizontal({ video }) {
    const {
        _id,
        videoThumbnail,
        videoLength,
        title,
        channelName,
        views,
        dateOfUpload,
        description,
    } = video;
    const [openModal, setOpenModal] = useState(false);
    const [playlistModal, setPlaylistModal] = useState(false);
    const navigate = useNavigate();
    return (
        <>
            <div
                className="video-card-horizontal"
                onClick={() => navigate(`/explore/${_id}`)}
            >
                <div className="videotile-wrapper">
                    <img
                        src={videoThumbnail}
                        className="img-responsive video-tile"
                        alt="video-tile"
                    />
                    <span className="video-time default-theme">{videoLength}</span>
                </div>
                <div className="video-details-horizontal-wrapper">
                    <div className="video-details-horizontal">
                        <div>
                            <p className="fw-500 my-0 video-details-header">{title}</p>
                            <p className="text-light fs-0-8 mb-0 mt-0-5">{channelName}</p>
                            <p className="text-light fs-0-7 my-0">
                                {calculateViews(views)} views •{" "}
                                {calculateDate(dateOfUpload)} ago
                            </p>
                        </div>
                        <button
                            className="btn btn-more"
                            onClick={(e) => {
                                e.stopPropagation();
                                setOpenModal((prev) => !prev);
                            }}
                        >
                            <span className="material-icons-round">more_vert</span>
                        </button>
                    </div>
                    <p className="video-desc fs-0-8">{description}</p>
                </div>
                {openModal && (
                    <HistoryVideoModal
                        video={video}
                        setOpenModal={setOpenModal}
                        setPlaylistModal={setPlaylistModal}
                    />
                )}
                {playlistModal && (
                    <AddToPlaylistModal
                        setPlaylistModal={setPlaylistModal}
                        video={video}
                    />
                )}
            </div>
        </>
    );
}

export { VideoCardHorizontal };
