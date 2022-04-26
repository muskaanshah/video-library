import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { useTheme, useVideo } from "../../context";
import { calculateDate, calculateLikes, calculateViews } from "../../utils";
import {
    addToWatchLater,
    addToLikes,
    removeLikes,
    removeFromWatchLater,
    addToHistory,
    getIndividualVideo,
} from "../../services";
import { AddToPlaylistModal } from "../../components/AddToPlaylistModal/AddToPlaylistModal";
import "./singlevideo.css";
import { Loader } from "../../components/Loader/Loader";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

function SingleVideo() {
    const [playlistModal, setPlaylistModal] = useState(false);
    const { videoId } = useParams();
    const { videoState, videoDispatch } = useVideo();
    const { loader, setLoader, alertDispatch } = useTheme();
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
        channelLink,
    } = video;

    const isInLikes = videoState.likedVideos.find((vid) => vid._id === _id);
    const likeHandler = () => {
        if (token) {
            if (isInLikes) {
                removeLikes(video, videoDispatch, alertDispatch);
            } else {
                addToLikes(video, videoDispatch, alertDispatch);
            }
        } else navigate("/login");
    };
    const isInWatchLater = videoState.watchLater.find((vid) => vid._id === video._id);
    const watchLaterHandler = () => {
        if (token) {
            if (isInWatchLater) {
                removeFromWatchLater(video, videoDispatch, alertDispatch);
            } else {
                addToWatchLater(video, videoDispatch, alertDispatch);
            }
        } else navigate("/login");
    };

    const addToHistoryHandler = () => {
        if (token) addToHistory(video, videoDispatch);
    };

    const toggleRef = useRef();
    const playlistRef = useRef();
    useOnClickOutside(playlistRef, toggleRef, () => setPlaylistModal(false));

    useEffect(() => {
        getIndividualVideo(videoId, videoDispatch, setLoader);
    }, [videoId, videoDispatch, setLoader]);
    return (
        <div className="container-body color-white">
            {loader ? (
                <Loader />
            ) : (
                <div className="pt-2 text-center">
                    <ReactPlayer
                        playing
                        width="75%"
                        controls={true}
                        url={`https://www.youtube.com/embed/${_id}`}
                        style={{
                            aspectRatio: 1.777,
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                        className="iframe-video"
                        onStart={addToHistoryHandler}
                    />
                    <div className="singlevideo-info mx-auto">
                        <h2 className="mb-0">{title}</h2>
                        <div className="singlevideo-viewcount-wrapper">
                            <p className="my-0 text-light singlevideo-viewcount">
                                {calculateViews(views)} views •{" "}
                                {calculateDate(dateOfUpload)} ago
                            </p>
                            <div className="singlevideo-icon-wrapper my-0">
                                <button className="btn btn-action" onClick={likeHandler}>
                                    {isInLikes ? (
                                        <>
                                            <span className="material-icons">
                                                thumb_up
                                            </span>
                                            {calculateLikes(likes + 1)}
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
                                        {isInWatchLater ? (
                                            <>
                                                <span className="material-icons-round">
                                                    watch_later
                                                </span>
                                                <span>REMOVE FROM WATCH LATER</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="material-icons-outlined">
                                                    watch_later
                                                </span>
                                                <span>WATCH LATER</span>
                                            </>
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
                                <button
                                    className="btn btn-more-singleproduct"
                                    ref={toggleRef}
                                >
                                    <span className="material-icons-round">
                                        more_vert
                                    </span>
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
                                <h3 className="my-0">
                                    <a
                                        href={channelLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="color-white text-none"
                                    >
                                        {channelName}
                                    </a>
                                </h3>
                                <p className="text-light fs-0-9 my-0">
                                    {subscribers} subscribers
                                </p>
                                <p className="mt-1 width-80">{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {playlistModal && (
                <AddToPlaylistModal
                    setPlaylistModal={setPlaylistModal}
                    video={video}
                    playlistRef={playlistRef}
                />
            )}
        </div>
    );
}

export { SingleVideo };
