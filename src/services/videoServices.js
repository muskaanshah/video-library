import axios from "axios";
import { ACTION_TYPE } from "../utils";

const getVideo = async (videoDispatch, setLoader) => {
    setLoader(true);
    try {
        const res = await axios.get("/api/videos");
        setLoader(false);
        videoDispatch({
            type: ACTION_TYPE.ADD_DEFAULT_VIDEOS,
            payload: { value: res.data.videos },
        });
    } catch (err) {
        console.error(err.message);
    }
};

const getIndividualVideo = async (videoId, videoDispatch, setLoader) => {
    setLoader(true);
    try {
        const res = await axios.get(`/api/video/${videoId}`);
        setLoader(false);
        videoDispatch({
            type: ACTION_TYPE.SINGLE_VIDEO,
            payload: { value: res.data.video },
        });
        return res.data.video;
    } catch (err) {
        console.error(err.message);
    }
};

const addComment = async (videoId, comments, setCommentsState) => {
    try {
        const res = await axios.post(`/api/video/${videoId}`, { comments });
        setCommentsState(res.data.video.comments);
    } catch (err) {
        console.error(err.message);
    }
};

export { getVideo, getIndividualVideo, addComment };
