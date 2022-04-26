import { useTheme, useVideo } from "../../../context";
import { deletePlaylist } from "../../../services";

function PlaylistModal({ playlist }) {
    const { videoDispatch } = useVideo();
    const { alertDispatch } = useTheme();
    return (
        <div
            className="playlist-modal color-white bg-grey-dark"
            onClick={(e) => e.stopPropagation()}
        >
            <p
                className="my-0 p-0-5 color-danger"
                onClick={() => deletePlaylist(playlist._id, videoDispatch, alertDispatch)}
            >
                <span className="material-icons-outlined">delete</span>Delete
            </p>
        </div>
    );
}

export { PlaylistModal };
