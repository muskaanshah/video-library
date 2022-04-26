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
        if (res.status === 201) {
            videoDispatch({
                type: ACTION_TYPE.ADD_SINGLE_PLAYLIST,
                payload: { value: res.data.playlist },
            });
        }
    } catch (err) {
        console.error(err);
    }
};

const removeFromPlaylist = async (video, playlistId, videoDispatch) => {
    try {
        const res = await axios.delete(`/api/user/playlists/${playlistId}/${video._id}`, {
            headers: {
                authorization: localStorage.getItem("encodedToken"),
            },
        });
        if (res.status === 200) {
            videoDispatch({
                type: ACTION_TYPE.ADD_SINGLE_PLAYLIST,
                payload: { value: res.data.playlist },
            });
        }
    } catch (err) {
        console.error(err);
    }
};

const deletePlaylist = async (playlistId, videoDispatch) => {
    try {
        const res = await axios.delete(`/api/user/playlists/${playlistId}`, {
            headers: {
                authorization: localStorage.getItem("encodedToken"),
            },
        });
        if (res.status === 200) {
            videoDispatch({
                type: ACTION_TYPE.ADD_PLAYLIST,
                payload: { value: res.data.playlists },
            });
        }
    } catch (err) {
        console.error(err);
    }
};

const getIndividualPlaylist = async (playlistId, videoDispatch) => {
    try {
        const res = await axios.get(`/api/user/playlists/${playlistId}`, {
            headers: {
                authorization: localStorage.getItem("encodedToken"),
            },
        });
        if (res.status === 200) {
            videoDispatch({
                type: ACTION_TYPE.ADD_SINGLE_PLAYLIST,
                payload: { value: res.data.playlist },
            });
        }
    } catch (err) {
        console.error(err);
    }
};

export {
    createPlaylist,
    getPlaylists,
    addToPlaylist,
    removeFromPlaylist,
    deletePlaylist,
    getIndividualPlaylist,
};
