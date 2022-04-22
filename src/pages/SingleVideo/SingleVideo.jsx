import { useParams } from "react-router-dom";
import { useVideo } from "../../context";
import { calculateDate, calculateLikes, calculateViews } from "../../utils";
import "./singlevideo.css";

function SingleVideo() {
    const { videoId } = useParams();
    const { videoState } = useVideo();
    const video = videoState.default.find((item) => item._id === videoId);
    console.log(videoId);
    const {
        _id,
        channelThumbnail,
        title,
        channelName,
        views,
        dateOfUpload,
        likes,
        subscribers,
        description,
    } = video;
    return (
        <div className="container-body color-white">
            <div className="pt-2 text-center">
                <iframe
                    width="75%"
                    src={`https://www.youtube.com/embed/${_id}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    className="iframe-video mx-auto"
                    allowfullscreen
                ></iframe>
                <div className="singlevideo-info mx-auto">
                    <h2>{title}</h2>
                    <div className="singlevideo-viewcount-wrapper">
                        <p className="my-0 text-light singlevideo-viewcount">
                            {calculateViews(views)} views • {calculateDate(dateOfUpload)}{" "}
                            ago
                        </p>
                        <p className="singlevideo-icon-wrapper my-0">
                            <button className="btn btn-action">
                                <span className="material-icons-outlined">thumb_up</span>
                                {calculateLikes(likes)}
                            </button>
                            <div>
                                <button className="btn btn-action">
                                    <span className="material-icons-outlined">
                                        watch_later
                                    </span>
                                    WATCH LATER
                                </button>
                                <button className="btn btn-action">
                                    <span className="material-icons-outlined">
                                        playlist_add
                                    </span>
                                    SAVE
                                </button>
                                <button className="btn btn-action">
                                    <span className="material-icons-outlined">share</span>
                                    SHARE
                                </button>
                            </div>
                            <button className="btn btn-more-singleproduct">
                                <span className="material-icons-round">more_vert</span>
                            </button>
                        </p>
                    </div>
                    <div className="divider-black bg-white mt-1"></div>
                    <div className="channel-details mt-1">
                        <img
                            src={channelThumbnail}
                            className="borderradius-full avatar avatar-sm"
                            alt="dp"
                        />
                        <div>
                            <h3 className="my-0">{channelName}</h3>
                            <p className="text-light fs-0-9 my-0">
                                {subscribers} subscribers
                            </p>
                            <p className="mt-1-5 width-80">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { SingleVideo };
