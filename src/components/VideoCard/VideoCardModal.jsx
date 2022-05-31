import { useLocation, useNavigate } from "react-router-dom";
import { useTheme, useVideo } from "../../context";
import {
  addToWatchLater,
  removeFromPlaylist,
  removeFromWatchLater,
  removeLikes,
} from "../../services";
import { ACTION_TYPE } from "../../utils";

function VideoCardModal({
  video,
  setOpenModal,
  setPlaylistModal,
  isPlaylist,
  playlistId,
  modalRef,
}) {
  const { videoState, videoDispatch } = useVideo();
  const { alertDispatch } = useTheme();
  const isInLikes = videoState.likedVideos.find((vid) => vid._id === video._id);
  const isInWatchLater = videoState.watchLater.find((vid) => vid._id === video._id);
  const token = localStorage.getItem("encodedToken");
  const location = useLocation();
  const navigate = useNavigate();
  const watchLaterHandler = (e) => {
    if (token) {
      if (isInWatchLater) {
        removeFromWatchLater(video, videoDispatch, alertDispatch);
      } else {
        addToWatchLater(video, videoDispatch, alertDispatch);
      }
    } else navigate("/login", { state: { from: location.pathname }, replace: true });
    setOpenModal(false);
  };
  const copyLinkHandler = () => {
    navigator.clipboard.writeText(`https://boardflix.netlify.app/explore/${video._id}`);
    alertDispatch({
      type: ACTION_TYPE.ACTIVATE_ALERT,
      payload: {
        alertType: "success",
        alertMsg: "Copied link to clipboard",
      },
    });
    setOpenModal(false);
  };

  return (
    <div
      className="bg-grey-dark videocard-modal py-0-5"
      onClick={(e) => e.stopPropagation()}
      ref={modalRef}
    >
      <p className="videocard-modal-action my-0" onClick={watchLaterHandler}>
        {isInWatchLater ? (
          <>
            <span className="material-icons-round">watch_later</span>
            <span>REMOVE FROM WATCH LATER</span>
          </>
        ) : (
          <>
            <span className="material-icons-outlined">watch_later</span>
            <span>WATCH LATER</span>
          </>
        )}
      </p>
      {isPlaylist ? (
        <p
          className="videocard-modal-action my-0"
          onClick={(e) =>
            removeFromPlaylist(video, playlistId, videoDispatch, alertDispatch)
          }
        >
          <span className="material-icons-outlined">playlist_add</span>
          <span>REMOVE FROM PLAYLIST</span>
        </p>
      ) : (
        <p
          className="videocard-modal-action my-0"
          onClick={(e) => {
            if (token) setPlaylistModal(true);
            else
              navigate("/login", { state: { from: location.pathname }, replace: true });
            setOpenModal(false);
          }}
        >
          <span className="material-icons-outlined">playlist_add</span>
          <span>SAVE TO PLAYLIST</span>
        </p>
      )}
      {isInLikes && (
        <p
          className="videocard-modal-action my-0"
          onClick={(e) => {
            removeLikes(video, videoDispatch, alertDispatch);
            setOpenModal(false);
          }}
        >
          <span className="material-icons-outlined">thumb_up</span>
          <span>REMOVE FROM LIKED</span>
        </p>
      )}
      <p className="videocard-modal-action my-0" onClick={copyLinkHandler}>
        <span className="material-icons-outlined">content_copy</span>
        <span>SHARE</span>
      </p>
    </div>
  );
}

export { VideoCardModal };
