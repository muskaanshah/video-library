import { createContext, useReducer, useContext, useEffect } from "react";
import { getVideo } from "../services";
import { ACTION_TYPE, setCategories, setTime, setTimeSort } from "../utils";

const VideoContext = createContext();

const initialState = {
    default: [],
    videos: [],
    categories: [],
    time: [],
    sortWay: "",
    history: [],
    likedVideos: [],
    watchLater: [],
    playlists: [],
    playlist: {},
};

const videoReducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPE.ADD_DEFAULT_VIDEOS:
            return {
                ...state,
                default: action.payload.value,
                videos: action.payload.value,
            };
        case ACTION_TYPE.CATEGORIES:
            return setCategories(state, action.payload.value);
        case ACTION_TYPE.TIME:
            return setTime(state, action.payload.value);
        case ACTION_TYPE.SORT_WAY:
            return setTimeSort(state, action.payload.value);
        case ACTION_TYPE.ADD_WATCH_LATER:
            return { ...state, watchLater: action.payload.value };
        case ACTION_TYPE.ADD_LIKES:
            return { ...state, likedVideos: action.payload.value };
        case ACTION_TYPE.ADD_HISTORY:
            return { ...state, history: action.payload.value };
        case ACTION_TYPE.ADD_PLAYLIST:
            return { ...state, playlists: action.payload.value };
        case ACTION_TYPE.ADD_SINGLE_PLAYLIST:
            return { ...state, playlist: action.payload.value };
        case ACTION_TYPE.CLEAR_ALL:
            return {
                ...state,
                videos: [...state.default],
                categories: [],
                time: [],
                sortWay: "",
            };
        default:
            return state;
    }
};

const VideoProvider = ({ children }) => {
    const [videoState, videoDispatch] = useReducer(videoReducer, initialState);
    useEffect(() => {
        getVideo(videoDispatch);
    }, []);
    return (
        <VideoContext.Provider value={{ videoState, videoDispatch }}>
            {children}
        </VideoContext.Provider>
    );
};

const useVideo = () => useContext(VideoContext);

export { VideoProvider, useVideo };
