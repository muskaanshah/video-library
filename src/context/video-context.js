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
            const temp = setCategories(state, action.payload.value);
            console.log(temp);
            return temp;
        case ACTION_TYPE.TIME:
            const temp1 = setTime(state, action.payload.value);
            console.log(temp1);
            return temp1;
        case ACTION_TYPE.SORT_WAY:
            const temp2 = setTimeSort(state, action.payload.value);
            return temp2;
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
