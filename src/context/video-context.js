import { createContext, useReducer, useContext, useEffect } from "react";
import { getVideo } from "../services";
import { ACTION_TYPE, setCategories, setTime, setTimeSort } from "../utils";

const VideoContext = createContext();

const initialState = {
    default: [],
    videos: [],
    singleVideo: {},
    categories: [],
    time: [],
    sortWay: "",
    history: [],
    likedVideos: [],
    watchLater: [],
    playlists: [],
    playlist: {},
    searchText: "",
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
        case ACTION_TYPE.SEARCH_VIDEOS:
            return {
                ...state,
                searchText: state.searchText,
                categories: [],
                time: [],
                sortWay: "",
                videos: state.default.filter((curItem) =>
                    curItem.title.toLowerCase().includes(state.searchText?.toLowerCase())
                ),
            };
        case ACTION_TYPE.SEARCH_TEXT:
            return { ...state, searchText: action.payload.value };
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
        case ACTION_TYPE.SINGLE_VIDEO:
            return { ...state, singleVideo: action.payload.value };
        case ACTION_TYPE.CLEAR_ALL:
            return {
                ...state,
                videos: [...state.default],
                categories: [],
                time: [],
                sortWay: "",
            };
        case ACTION_TYPE.USER_LOGOUT:
            return {
                ...state,
                history: [],
                likedVideos: [],
                watchLater: [],
                playlists: [],
                playlist: {},
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
