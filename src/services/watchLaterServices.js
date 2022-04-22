import axios from "axios";
import { ACTION_TYPE } from "../utils";

const addToWatchLater = async (video, videoState) => {
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
        console.log(res);
        if (res.status === 201) {
            return { ...videoState, watchLater: res.data.watchlater };
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
        console.log(res);
        videoDispatch({
            type: ACTION_TYPE.ADD_WATCH_LATER,
            payload: { value: res.data.watchlater },
        });
    } catch (err) {
        console.log(err);
    }
};

export { addToWatchLater, getWatchLater };
