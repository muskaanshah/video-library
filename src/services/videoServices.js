import axios from "axios";
import { ACTION_TYPE } from "../utils";

const getVideo = async (videoDispatch) => {
    try {
        const res = await axios.get("/api/videos");
        videoDispatch({
            type: ACTION_TYPE.ADD_DEFAULT_VIDEOS,
            payload: { value: res.data.videos },
        });
    } catch (err) {
        console.error(err.message);
    }
};

const getIndividualVideo = async (videoId, videoDispatch) => {
    try {
        const res = await axios.get(`/api/video/${videoId}`);
        videoDispatch({
            type: ACTION_TYPE.SINGLE_VIDEO,
            payload: { value: res.data.video },
        });
    } catch (err) {
        console.error(err.message);
    }
};

export { getVideo, getIndividualVideo };
