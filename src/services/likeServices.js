import axios from "axios";
import { ACTION_TYPE } from "../utils";

const addToLikes = async (video, videoDispatch) => {
    try {
        const res = await axios.post(
            "/api/user/likes",
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
                type: ACTION_TYPE.ADD_LIKES,
                payload: { value: res.data.likes },
            });
        }
    } catch (err) {
        console.log(err);
    }
};

const getLikes = async (videoDispatch) => {
    try {
        const res = await axios.get("/api/user/likes", {
            headers: {
                authorization: localStorage.getItem("encodedToken"),
            },
        });
        videoDispatch({
            type: ACTION_TYPE.ADD_LIKES,
            payload: { value: res.data.likes },
        });
    } catch (err) {
        console.log(err);
    }
};

const removeLikes = async (video, videoDispatch) => {
    try {
        const res = await axios.delete(`/api/user/likes/${video._id}`, {
            headers: {
                authorization: localStorage.getItem("encodedToken"),
            },
        });
        if (res.status === 200) {
            videoDispatch({
                type: ACTION_TYPE.ADD_LIKES,
                payload: { value: res.data.likes },
            });
        }
    } catch (err) {
        console.log(err);
    }
};

export { addToLikes, getLikes, removeLikes };
