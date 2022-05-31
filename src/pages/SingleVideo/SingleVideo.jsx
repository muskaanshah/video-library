import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { useTheme, useVideo } from "../../context";
import { ACTION_TYPE, calculateDate, calculateLikes, calculateViews } from "../../utils";
import {
  addToWatchLater,
  addToLikes,
  removeLikes,
  removeFromWatchLater,
  addToHistory,
  getIndividualVideo,
  removeVideoFromHistory,
} from "../../services";
import { AddToPlaylistModal } from "../../components/AddToPlaylistModal/AddToPlaylistModal";
import "./singlevideo.css";
import { Loader } from "../../components/Loader/Loader";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { InputComment } from "./components/InputComment";

function SingleVideo() {
  const [playlistModal, setPlaylistModal] = useState(false);
  const { videoId } = useParams();
  const { videoState, videoDispatch } = useVideo();
  const { loader, setLoader, alertDispatch } = useTheme();
  const token = localStorage.getItem("encodedToken");
  const navigate = useNavigate();
  const location = useLocation();
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
    comments,
  } = video;
  const [commentsState, setCommentsState] = useState(comments || []);
  const isInLikes = videoState.likedVideos.find((vid) => vid._id === _id);
  const likeHandler = () => {
    if (token) {
      if (isInLikes) {
        removeLikes(video, videoDispatch, alertDispatch);
      } else {
        addToLikes(video, videoDispatch, alertDispatch);
      }
    } else navigate("/login", { state: { from: location.pathname }, replace: true });
  };
  const isInWatchLater = videoState.watchLater.find((vid) => vid._id === video._id);
  const watchLaterHandler = () => {
    if (token) {
      if (isInWatchLater) {
        removeFromWatchLater(video, videoDispatch, alertDispatch);
      } else {
        addToWatchLater(video, videoDispatch, alertDispatch);
      }
    } else navigate("/login", { state: { from: location.pathname }, replace: true });
  };

  const addToHistoryHandler = async () => {
    if (token) {
      const isInHistory = videoState.history.find((vid) => vid._id === video._id);
      if (isInHistory) {
        await removeVideoFromHistory(video, videoDispatch);
        addToHistory(video, videoDispatch);
      } else {
        addToHistory(video, videoDispatch);
      }
    }
  };

  const copyLinkHandler = () => {
    navigator.clipboard.writeText(`https://boardflix.netlify.app/explore/${_id}`);
    alertDispatch({
      type: ACTION_TYPE.ACTIVATE_ALERT,
      payload: {
        alertType: "success",
        alertMsg: "Copied link to clipboard",
      },
    });
  };

  const toggleRef = useRef();
  const playlistRef = useRef();
  useOnClickOutside(playlistRef, toggleRef, () => setPlaylistModal(false));

  useEffect(() => {
    (async () => {
      const { comments } = await getIndividualVideo(videoId, videoDispatch, setLoader);
      if (comments && comments.length > 0) setCommentsState(comments);
    })();
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
            <div className="singlevideo-viewcount-wrapper my-1">
              <p className="my-0 text-light singlevideo-viewcount">
                {calculateViews(views)} views • {calculateDate(dateOfUpload)} ago
              </p>
              <div className="singlevideo-icon-wrapper my-0">
                <button className="btn btn-action" onClick={likeHandler}>
                  {isInLikes ? (
                    <>
                      <span className="material-icons">thumb_up</span>
                      {calculateLikes(likes + 1)}
                    </>
                  ) : (
                    <>
                      <span className="material-icons-outlined">thumb_up</span>
                      {calculateLikes(likes)}
                    </>
                  )}
                </button>
                <div>
                  <button className="btn btn-action" onClick={watchLaterHandler}>
                    {isInWatchLater ? (
                      <>
                        <span className="material-icons-round">watch_later</span>
                        <span className="action-names">REMOVE FROM WATCH LATER</span>
                      </>
                    ) : (
                      <>
                        <span className="material-icons-outlined">watch_later</span>
                        <span className="action-names">WATCH LATER</span>
                      </>
                    )}
                  </button>
                  <button
                    className="btn btn-action"
                    onClick={() => {
                      if (token) setPlaylistModal(true);
                      else
                        navigate("/login", {
                          state: { from: location.pathname },
                          replace: true,
                        });
                    }}
                  >
                    <span className="material-icons-outlined">playlist_add</span>
                    <span className="action-names">SAVE</span>
                  </button>
                  <button className="btn btn-action" onClick={copyLinkHandler}>
                    <span className="material-icons-outlined">content_copy</span>
                    <span className="action-names">SHARE</span>
                  </button>
                </div>
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
                <p className="text-light fs-0-9 my-0">{subscribers} subscribers</p>
                <p className="mt-1 width-80">{description}</p>
              </div>
            </div>
            <div className="divider-black bg-white my-1"></div>
            <div className="comments-section">
              <h3>Comments</h3>
              {token && (
                <InputComment
                  setCommentsState={setCommentsState}
                  commentsState={commentsState}
                  videoId={_id}
                />
              )}
              {[...commentsState].reverse()?.map((comment) => (
                <div className="comment my-1" key={comment._userName}>
                  <span
                    className="borderradius-full avatar-default-sm default-theme color-white"
                    style={{ backgroundColor: comment.color }}
                    alt="dp"
                  >
                    {comment.userName[0]}
                  </span>
                  <div>
                    <p
                      className="my-0"
                      style={{
                        color: comment.color,
                      }}
                    >
                      {comment.userName}
                    </p>
                    <p className="my-0-5">{comment.comment}</p>
                    <p className="text-light fs-0-8 my-0">{comment.commentDate}</p>
                  </div>
                </div>
              ))}
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
