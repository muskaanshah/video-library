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

const getPlaylists = async (videoDispatch, setLoader) => {
    setLoader(true);
    try {
        const res = await axios.get("/api/user/playlists", {
            headers: {
                authorization: localStorage.getItem("encodedToken"),
            },
        });
        setLoader(false);
        videoDispatch({
            type: ACTION_TYPE.ADD_PLAYLIST,
            payload: { value: res.data.playlists },
        });
    } catch (err) {
        console.error(err);
    }
};

const addToPlaylist = async (video, playlistId, videoDispatch, alertDispatch) => {
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
            alertDispatch({
                type: ACTION_TYPE.ACTIVATE_ALERT,
                payload: {
                    alertType: "success",
                    alertMsg: "Added to playlist",
                },
            });
        }
    } catch (err) {
        alertDispatch({
            type: ACTION_TYPE.ACTIVATE_ALERT,
            payload: {
                alertType: "error",
                alertMsg: err.message,
            },
        });
    }
};

const removeFromPlaylist = async (video, playlistId, videoDispatch, alertDispatch) => {
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
        alertDispatch({
            type: ACTION_TYPE.ACTIVATE_ALERT,
            payload: {
                alertType: "success",
                alertMsg: "Removed from playlist",
            },
        });
    } catch (err) {
        alertDispatch({
            type: ACTION_TYPE.ACTIVATE_ALERT,
            payload: {
                alertType: "error",
                alertMsg: err.message,
            },
        });
    }
};

const deletePlaylist = async (playlistId, videoDispatch, alertDispatch) => {
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
            alertDispatch({
                type: ACTION_TYPE.ACTIVATE_ALERT,
                payload: {
                    alertType: "success",
                    alertMsg: "Playlist deleted",
                },
            });
        }
    } catch (err) {
        alertDispatch({
            type: ACTION_TYPE.ACTIVATE_ALERT,
            payload: {
                alertType: "error",
                alertMsg: err.message,
            },
        });
    }
};

const getIndividualPlaylist = async (playlistId, videoDispatch, setLoader) => {
    setLoader(true);
    try {
        const res = await axios.get(`/api/user/playlists/${playlistId}`, {
            headers: {
                authorization: localStorage.getItem("encodedToken"),
            },
        });
        setLoader(false);
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

const clearPlaylists = async (videoState, videoDispatch, setLoader) => {
    setLoader(true);
    let playlistData;
    for await (const playlist of videoState.playlists) {
        try {
            const res = await axios.delete(`/api/user/playlists/${playlist._id}`, {
                headers: {
                    authorization: localStorage.getItem("encodedToken"),
                },
            });
            setLoader(false);
            if (res.status === 200) playlistData = res.data.playlists;
        } catch (err) {
            console.error(err);
        }
    }
    videoDispatch({
        type: ACTION_TYPE.ADD_PLAYLIST,
        payload: { value: playlistData },
    });
};

export {
    createPlaylist,
    getPlaylists,
    addToPlaylist,
    removeFromPlaylist,
    deletePlaylist,
    getIndividualPlaylist,
    clearPlaylists,
};
