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
        console.error(err);
    }
};

const getLikes = async (videoDispatch, setLoader) => {
    setLoader(true);
    try {
        const res = await axios.get("/api/user/likes", {
            headers: {
                authorization: localStorage.getItem("encodedToken"),
            },
        });
        setLoader(false);
        videoDispatch({
            type: ACTION_TYPE.ADD_LIKES,
            payload: { value: res.data.likes },
        });
    } catch (err) {
        console.error(err);
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
        console.error(err);
    }
};

const clearLikedVideos = async (videoState, videoDispatch, setLoader) => {
    let likedVideosData;
    setLoader(true);
    for await (const video of videoState.likedVideos) {
        try {
            const res = await axios.delete(`/api/user/likes/${video._id}`, {
                headers: {
                    authorization: localStorage.getItem("encodedToken"),
                },
            });
            setLoader(false);
            if (res.status === 200) likedVideosData = res.data.likes;
        } catch (err) {
            console.error(err);
        }
    }
    videoDispatch({
        type: ACTION_TYPE.ADD_LIKES,
        payload: { value: likedVideosData },
    });
};

export { addToLikes, getLikes, removeLikes, clearLikedVideos };
