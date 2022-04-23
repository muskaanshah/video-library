import axios from "axios";
import { ACTION_TYPE } from "../utils";

const addToWatchLater = async (video, videoDispatch) => {
    try {
        const res = await axios.post(
            "/api/user/watchlater",
            {
                video,
            },
            {
                headers: {
                    authorization: localStorage.getItem("encodedToken"),
                },
            }
        );
        if (res.status === 201) {
            videoDispatch({
                type: ACTION_TYPE.ADD_WATCH_LATER,
                payload: { value: res.data.watchlater },
            });
        }
    } catch (err) {
        console.log(err);
    }
};

const getWatchLater = async (videoDispatch) => {
    try {
        const res = await axios.get("/api/user/watchlater", {
            headers: {
                authorization: localStorage.getItem("encodedToken"),
            },
        });
        videoDispatch({
            type: ACTION_TYPE.ADD_WATCH_LATER,
            payload: { value: res.data.watchlater },
        });
    } catch (err) {
        console.log(err);
    }
};

const removeFromWatchLater = async (video, videoDispatch) => {
    try {
        const res = await axios.delete(`/api/user/watchlater/${video._id}`, {
            headers: {
                authorization: localStorage.getItem("encodedToken"),
            },
        });
        if (res.status === 200) {
            videoDispatch({
                type: ACTION_TYPE.ADD_WATCH_LATER,
                payload: { value: res.data.watchlater },
            });
        }
    } catch (err) {
        console.log(err);
    }
};

export { addToWatchLater, getWatchLater, removeFromWatchLater };
