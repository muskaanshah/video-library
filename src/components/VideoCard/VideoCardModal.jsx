import { useNavigate } from "react-router-dom";
import { useTheme, useVideo } from "../../context";
import {
    addToWatchLater,
    removeFromPlaylist,
    removeFromWatchLater,
    removeLikes,
} from "../../services";

function VideoCardModal({
    video,
    setOpenModal,
    setPlaylistModal,
    isPlaylist,
    playlistId,
}) {
    const { videoState, videoDispatch } = useVideo();
    const { alertDispatch } = useTheme();
    const isInLikes = videoState.likedVideos.find((vid) => vid._id === video._id);
    const isInWatchLater = videoState.watchLater.find((vid) => vid._id === video._id);
    const token = localStorage.getItem("encodedToken");
    const navigate = useNavigate();
    const watchLaterHandler = (e) => {
        if (token) {
            if (isInWatchLater) {
                removeFromWatchLater(video, videoDispatch, alertDispatch);
            } else {
                addToWatchLater(video, videoDispatch, alertDispatch);
            }
        } else navigate("/login");
        setOpenModal(false);
    };
    return (
        <div
            className="bg-grey-dark videocard-modal py-0-5"
            onClick={(e) => e.stopPropagation()}
        >
            <p className="videocard-modal-action my-0" onClick={watchLaterHandler}>
                <span className="material-icons-outlined">watch_later</span>
                {isInWatchLater ? (
                    <span>REMOVE FROM WATCH LATER</span>
                ) : (
                    <span>WATCH LATER</span>
                )}
            </p>
            {isPlaylist ? (
                <p
                    className="videocard-modal-action my-0"
                    onClick={(e) =>
                        removeFromPlaylist(
                            video,
                            playlistId,
                            videoDispatch,
                            alertDispatch
                        )
                    }
                >
                    <span className="material-icons-outlined">playlist_add</span>
                    <span>REMOVE FROM PLAYLIST</span>
                </p>
            ) : (
                <p
                    className="videocard-modal-action my-0"
                    onClick={(e) => {
                        setPlaylistModal(true);
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
            {/* <p className="videocard-modal-action my-0">
				<span className="material-icons-outlined">share</span>
				<span>SHARE</span>
			</p> */}
        </div>
    );
}

export { VideoCardModal };
