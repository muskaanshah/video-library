import axios from "axios";
import { ACTION_TYPE } from "../utils";

const createPlaylist = async (title, videoDispatch) => {
    try {
        const res = await axios.post(
            "/api/user/playlists",
            {
                playlist: { title },
            },
            {
                headers: {
                    authorization: localStorage.getItem("encodedToken"),
                },
            }
        );
        if (res.status === 201) {
            videoDispatch({
                type: ACTION_TYPE.ADD_PLAYLIST,
                payload: { value: res.data.playlists },
            });
        }
    } catch (err) {
        console.error(err);
    }
};

const getPlaylists = async (videoDispatch) => {
    try {
        const res = await axios.get("/api/user/playlists", {
            headers: {
                authorization: localStorage.getItem("encodedToken"),
            },
        });
        videoDispatch({
            type: ACTION_TYPE.ADD_PLAYLIST,
            payload: { value: res.data.playlists },
        });
    } catch (err) {
        console.error(err);
    }
};

const addToPlaylist = async (video, playlistId, videoDispatch) => {
    try {
        const res = await axios.post(
            `/api/user/playlists/${playlistId}`,
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
                type: ACTION_TYPE.ADD_PLAYLIST,
                payload: { value: res.data.playlists },
            });
        }
    } catch (err) {
        console.error(err);
    }
};

export { createPlaylist, getPlaylists, addToPlaylist };
