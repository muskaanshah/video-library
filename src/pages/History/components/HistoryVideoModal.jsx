import { useTheme, useVideo } from "../../../context";
import {
    addToWatchLater,
    removeFromWatchLater,
    removeLikes,
    removeVideoFromHistory,
} from "../../../services";

function HistoryVideoModal({ video, setOpenModal, setPlaylistModal }) {
    const { videoState, videoDispatch } = useVideo();
    const { alertDispatch } = useTheme();
    const isInWatchLater = videoState.watchLater.find((vid) => vid._id === video._id);
    const isInLikes = videoState.likedVideos.find((vid) => vid._id === video._id);
    const watchLaterHandler = (e) => {
        e.stopPropagation();
        if (isInWatchLater) {
            removeFromWatchLater(video, videoDispatch, alertDispatch);
        } else {
            addToWatchLater(video, videoDispatch, alertDispatch);
        }
        setOpenModal(false);
    };
    const removeHistoryHandler = (e) => {
        e.stopPropagation();
        removeVideoFromHistory(video, videoDispatch, alertDispatch);
        setOpenModal(false);
    };
    return (
        <div
            className="bg-grey-dark videocard-modal py-0-5 videocard-modal-horizontal"
            onClick={(e) => e.stopPropagation()}
        >
            <p className="videocard-modal-action my-0" onClick={removeHistoryHandler}>
                <span className="material-icons-outlined">delete</span>
                <span>REMOVE FROM HISTORY</span>
            </p>
            <p className="videocard-modal-action my-0" onClick={watchLaterHandler}>
                <span className="material-icons-outlined">watch_later</span>
                {isInWatchLater ? (
                    <span>REMOVE FROM WATCH LATER</span>
                ) : (
                    <span>WATCH LATER</span>
                )}
            </p>
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
            {isInLikes && (
                <p
                    className="videocard-modal-action my-0"
                    onClick={() => {
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

export { HistoryVideoModal };
