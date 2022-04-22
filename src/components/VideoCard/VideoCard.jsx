import { useNavigate } from "react-router-dom";
import { calculateDate, calculateViews } from "../../utils";
import "../videocard.css";

function VideoCard({ video }) {
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
                        <p className="text-light fs-0-8 my-0">
                            {calculateViews(views)} views • {calculateDate(dateOfUpload)}{" "}
                            ago
                        </p>
                    </div>
                    <button className="btn btn-more">
                        <span className="material-icons-round">more_vert</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export { VideoCard };
