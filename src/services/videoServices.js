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

export { getVideo };
