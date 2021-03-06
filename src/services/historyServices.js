import axios from "axios";
import { ACTION_TYPE } from "../utils";

const addToHistory = async (video, videoDispatch) => {
    try {
        const res = await axios.post(
            "/api/user/history",
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
                type: ACTION_TYPE.ADD_HISTORY,
                payload: { value: res.data.history },
            });
        }
    } catch (err) {
        console.error(err);
    }
};

const getHistory = async (videoDispatch, setLoader) => {
    setLoader(true);
    try {
        const res = await axios.get("/api/user/history", {
            headers: {
                authorization: localStorage.getItem("encodedToken"),
            },
        });
        setLoader(false);
        videoDispatch({
            type: ACTION_TYPE.ADD_HISTORY,
            payload: { value: res.data.history.reverse() },
        });
    } catch (err) {
        console.error(err);
    }
};

const removeVideoFromHistory = async (video, videoDispatch) => {
    try {
        const res = await axios.delete(`/api/user/history/${video._id}`, {
            headers: {
                authorization: localStorage.getItem("encodedToken"),
            },
        });
        if (res.status === 200) {
            videoDispatch({
                type: ACTION_TYPE.ADD_HISTORY,
                payload: { value: res.data.history },
            });
        }
    } catch (err) {
        console.error(err.message);
    }
};

const clearHistory = async (videoState, videoDispatch, setLoader) => {
    let historyData;
    setLoader(true);
    for await (const video of videoState.history) {
        try {
            const res = await axios.delete(`/api/user/history/${video._id}`, {
                headers: {
                    authorization: localStorage.getItem("encodedToken"),
                },
            });
            setLoader(false);
            if (res.status === 200) historyData = res.data.history;
        } catch (err) {
            console.error(err);
        }
    }
    videoDispatch({
        type: ACTION_TYPE.ADD_HISTORY,
        payload: { value: historyData },
    });
};

export { addToHistory, getHistory, removeVideoFromHistory, clearHistory };
