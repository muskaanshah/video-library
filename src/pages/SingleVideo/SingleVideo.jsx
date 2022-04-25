import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useVideo } from "../../context";
import { calculateDate, calculateLikes, calculateViews } from "../../utils";
import {
    addToWatchLater,
    addToLikes,
    removeLikes,
    removeFromWatchLater,
    addToHistory,
    getIndividualVideo,
} from "../../services";
import "./singlevideo.css";
import { AddToPlaylistModal } from "../../components/AddToPlaylistModal/AddToPlaylistModal";

function SingleVideo() {
    const [playlistModal, setPlaylistModal] = useState(false);
    const { videoId } = useParams();
    const { videoState, videoDispatch } = useVideo();
    const token = localStorage.getItem("encodedToken");
    const navigate = useNavigate();
    const video = videoState.singleVideo;
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

    const isInLikes = videoState.likedVideos.find((vid) => vid._id === _id);
    const likeHandler = () => {
        if (token) {
            if (isInLikes) {
                removeLikes(video, videoDispatch);
            } else {
                addToLikes(video, videoDispatch);
            }
        } else navigate("/login");
    };
    const isInWatchLater = videoState.watchLater.find((vid) => vid._id === video._id);
    const watchLaterHandler = () => {
        if (token) {
            if (isInWatchLater) {
                removeFromWatchLater(video, videoDispatch);
            } else {
                addToWatchLater(video, videoDispatch);
            }
        } else navigate("/login");
    };

    useEffect(() => {
        if (token) addToHistory(video, videoDispatch);
    }, [token, video, videoDispatch]);

    useEffect(() => {
        getIndividualVideo(videoId, videoDispatch);
    }, [videoId, videoDispatch]);
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
                        <div className="singlevideo-icon-wrapper my-0">
                            <button className="btn btn-action" onClick={likeHandler}>
                                {isInLikes ? (
                                    <>
                                        <span class="material-icons">thumb_up</span>
                                        Liked
                                    </>
                                ) : (
                                    <>
                                        <span className="material-icons-outlined">
                                            thumb_up
                                        </span>
                                        {calculateLikes(likes)}
                                    </>
                                )}
                            </button>
                            <div>
                                <button
                                    className="btn btn-action"
                                    onClick={watchLaterHandler}
                                >
                                    <span className="material-icons-outlined">
                                        watch_later
                                    </span>
                                    {isInWatchLater ? (
                                        <span>REMOVE FROM WATCH LATER</span>
                                    ) : (
                                        <span>WATCH LATER</span>
                                    )}
                                </button>
                                <button
                                    className="btn btn-action"
                                    onClick={() => setPlaylistModal(true)}
                                >
                                    <span className="material-icons-outlined">
                                        playlist_add
                                    </span>
                                    SAVE
                                </button>
                                {/* <button className="btn btn-action">
                                    <span className="material-icons-outlined">share</span>
                                    SHARE
                                </button> */}
                            </div>
                            <button className="btn btn-more-singleproduct">
                                <span className="material-icons-round">more_vert</span>
                            </button>
                        </div>
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
            {playlistModal && (
                <AddToPlaylistModal setPlaylistModal={setPlaylistModal} video={video} />
            )}
        </div>
    );
}

export { SingleVideo };
