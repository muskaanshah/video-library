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
        console.log(res);
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

const getHistory = async (videoDispatch) => {
    try {
        const res = await axios.get("/api/user/history", {
            headers: {
                authorization: localStorage.getItem("encodedToken"),
            },
        });
        console.log(res);
        videoDispatch({
            type: ACTION_TYPE.ADD_HISTORY,
            payload: { value: res.data.history },
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
        console.error(err);
    }
};

export { addToHistory, getHistory, removeVideoFromHistory };
