import { useVideo } from "../../context";
import { addToWatchLater } from "../../services";

function VideoCardModal({ video, setOpenModal }) {
    const { videoState } = useVideo();
    const watchLaterHandler = (e) => {
        e.stopPropagation();
        addToWatchLater(video, videoState);
        setOpenModal(false);
    };
    return (
        <div className="bg-grey-dark videocard-modal py-0-5">
            <p className="videocard-modal-action my-0" onClick={watchLaterHandler}>
                <span className="material-icons-outlined">watch_later</span>
                <span>WATCH LATER</span>
            </p>
            <p className="videocard-modal-action my-0">
                <span className="material-icons-outlined">playlist_add</span>
                <span>SAVE TO PLAYLIST</span>
            </p>
            {/* <p className="videocard-modal-action my-0">
				<span className="material-icons-outlined">share</span>
				<span>SHARE</span>
			</p> */}
        </div>
    );
}

export { VideoCardModal };
