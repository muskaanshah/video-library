import { useNavigate } from "react-router-dom";

function PlaylistTile({ playlist }) {
    const navigate = useNavigate();
    return (
        <div
            className="playlist-tile color-white"
            onClick={() => {
                navigate(`/playlist/${playlist._id}`);
            }}
        >
            <div className="playlist-img-wrapper">
                <img
                    src="https://picsum.photos/270/150"
                    className="img-responsive playlist-img"
                    alt="playlist-tile"
                />
                <p className="playlist-number my-0 default-theme">
                    <span>{playlist.videos.length}</span>
                    <span className="material-icons-outlined">playlist_play</span>
                </p>
            </div>
            <div className="playlistinfo">
                <p>{playlist.title}</p>
                <button className="btn btn-more-playlist bg-transparent color-white">
                    <span className="material-icons-round">more_vert</span>
                </button>
            </div>
        </div>
    );
}

export { PlaylistTile };
