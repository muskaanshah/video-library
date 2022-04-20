import { createContext, useReducer, useContext, useEffect } from "react";
import { getVideo } from "../services";
import { ACTION_TYPE } from "../utils";

const VideoContext = createContext();

const initialState = {
    default: [],
    videos: [],
};

const videoReducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPE.ADD_DEFAULT_VIDEOS:
            return {
                ...state,
                default: action.payload.value,
                videos: action.payload.value,
            };
        default:
            return state;
    }
};

const VideoProvider = ({ children }) => {
    const [videoState, videoDispatch] = useReducer(videoReducer, initialState);
    console.log(videoState);
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
