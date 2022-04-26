import { Link } from "react-router-dom";
import { useEffect } from "react";
import { bannerimg, bannerimgdesktop } from "../../assets";
import { useTheme, useVideo } from "../../context";
import { getIndividualVideo } from "../../services";
import { calculateDate, getTime } from "../../utils";
import "./home.css";

function Home() {
    const videoId = "QE7_Q5klSeA";
    const { videoState, videoDispatch } = useVideo();
    const { setLoader } = useTheme();
    const video = videoState.singleVideo;
    useEffect(() => {
        getIndividualVideo(videoId, videoDispatch, setLoader);
    }, [videoDispatch]);
    return (
        <div className="container-body bg-black">
            <div className="banner-wrapper default-theme">
                <picture>
                    <source media="(min-width: 700px)" srcSet={bannerimgdesktop} />
                    <img
                        src={bannerimg}
                        className="img-responsive img-banner"
                        alt="banner"
                    />
                </picture>
                <div className="banner-overlay">
                    <h2 className="banner-info-heading color-white my-0">
                        {video.title}
                    </h2>
                    <p className="color-white fw-300 fs-0-8 mt-0-5">
                        {getTime(video.videoLength)} | {calculateDate(video.dateOfUpload)}{" "}
                        ago
                    </p>
                    <Link
                        to={`/explore/${video._id}`}
                        className="btn bg-primary borderradius-0-5 color-black fw-500 p-0-5 mt-1"
                    >
                        <span className="material-icons-round">play_arrow</span>
                        <span className="fs-0-9">Watch now</span>
                    </Link>
                </div>
            </div>
            <div className="color-white centered flex-column px-1">
                <h2 className="text-center pt-2">About BoardFlix</h2>
                <p className="about-body mx-1">
                    BoardFlix is a video streaming platform which is used to understand
                    the gameplay of board games. It offers tutorials, live streaming of
                    games, different strategies, different approaches, the uses and other
                    such various techniques. Our main aim is for users to understand the
                    importance of playing board games and sharpening the skills.
                </p>
                <Link
                    to="/explore"
                    className="btn bg-primary borderradius-0-5 color-black fw-500 p-1 fs-0-9 mx-auto mt-1"
                >
                    Explore our collection
                </Link>
            </div>
        </div>
    );
}

export { Home };
