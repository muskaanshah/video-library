import { useNavigate } from "react-router-dom";
import { useVideo } from "../../context";
import { addToWatchLater, removeFromWatchLater, removeLikes } from "../../services";

function VideoCardModal({ video, setOpenModal }) {
    const { videoState, videoDispatch } = useVideo();
    const isInLikes = videoState.likedVideos.find((vid) => vid._id === video._id);
    const isInWatchLater = videoState.watchLater.find((vid) => vid._id === video._id);
    const token = localStorage.getItem("encodedToken");
    const navigate = useNavigate();
    const watchLaterHandler = (e) => {
        e.stopPropagation();
        if (token) {
            if (isInWatchLater) {
                removeFromWatchLater(video, videoDispatch);
            } else {
                addToWatchLater(video, videoDispatch);
            }
        } else navigate("/login");
        setOpenModal(false);
    };
    return (
        <div className="bg-grey-dark videocard-modal py-0-5">
            <p className="videocard-modal-action my-0" onClick={watchLaterHandler}>
                <span className="material-icons-outlined">watch_later</span>
                {isInWatchLater ? (
                    <span>REMOVE FROM WATCH LATER</span>
                ) : (
                    <span>WATCH LATER</span>
                )}
            </p>
            <p className="videocard-modal-action my-0">
                <span className="material-icons-outlined">playlist_add</span>
                <span>SAVE TO PLAYLIST</span>
            </p>
            {isInLikes && (
                <p
                    className="videocard-modal-action my-0"
                    onClick={(e) => {
                        e.stopPropagation();
                        removeLikes(video, videoDispatch);
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
