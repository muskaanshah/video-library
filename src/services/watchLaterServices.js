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
        console.error(err);
    }
};

const getWatchLater = async (videoDispatch, setLoader) => {
    setLoader(true);
    try {
        const res = await axios.get("/api/user/watchlater", {
            headers: {
                authorization: localStorage.getItem("encodedToken"),
            },
        });
        setLoader(false);
        videoDispatch({
            type: ACTION_TYPE.ADD_WATCH_LATER,
            payload: { value: res.data.watchlater },
        });
    } catch (err) {
        console.error(err);
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
        console.error(err);
    }
};

const clearWatchLater = async (videoState, videoDispatch, setLoader) => {
    setLoader(true);
    let watchLaterData;
    for await (const video of videoState.watchLater) {
        try {
            const res = await axios.delete(`/api/user/watchlater/${video._id}`, {
                headers: {
                    authorization: localStorage.getItem("encodedToken"),
                },
            });
            setLoader(false);
            if (res.status === 200) watchLaterData = res.data.watchlater;
        } catch (err) {
            console.error(err);
        }
    }
    videoDispatch({
        type: ACTION_TYPE.ADD_WATCH_LATER,
        payload: { value: watchLaterData },
    });
};

export { addToWatchLater, getWatchLater, removeFromWatchLater, clearWatchLater };
