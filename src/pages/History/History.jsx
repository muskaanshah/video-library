import { useEffect } from "react";
import { VideoCardHorizontal } from "../../components/VideoCardHorizontal/VideoCardHorizontal";
import { useVideo } from "../../context";
import { getHistory } from "../../services";

function History() {
    const { videoState, videoDispatch } = useVideo();
    console.log(videoState.history);
    useEffect(() => {
        getHistory(videoDispatch);
    }, [videoDispatch]);
    return (
        <div className="container-body color-white p-1">
            <div className="videocard-display mt-1-5">
                {videoState.history.map((video) => (
                    <VideoCardHorizontal video={video} />
                ))}
            </div>
        </div>
    );
}

export { History };
