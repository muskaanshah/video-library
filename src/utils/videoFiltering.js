const setCategories = (state, value) => {
    const temp = state.categories.includes(value)
        ? {
              ...state,
              categories: state.categories.filter((cur) => cur !== value),
          }
        : { ...state, categories: [...state.categories, value] };
    return setFiltering(temp);
};

const setTime = (state, value) => {
    const temp = state.time.includes(value)
        ? {
              ...state,
              time: state.time.filter((cur) => cur !== value),
          }
        : { ...state, time: [...state.time, value] };

    return setFiltering(temp);
};

const setTimeSort = (state, value) => {
    const temp = { ...state, sortWay: value };
    return setFiltering(temp);
};

const setFiltering = (state) => {
    const tempFilter = {
        ...state,
        videos: state.default.filter((curItem) => {
            let includesTime = false;
            const videoSeconds = convertToSeconds(curItem.videoLength);
            if (state.time.includes("Under 5 mins") && videoSeconds <= 300) {
                includesTime = true;
            }
            if (
                state.time.includes("5-20 mins") &&
                videoSeconds > 300 &&
                videoSeconds <= 1200
            ) {
                includesTime = true;
            }
            if (
                state.time.includes("20-40 mins") &&
                videoSeconds > 1200 &&
                videoSeconds <= 2400
            ) {
                includesTime = true;
            }
            if (state.time.includes("Over 40 mins") && videoSeconds > 2400) {
                includesTime = true;
            }
            return (
                ([...state.categories].length > 0 && !state.categories.includes("All")
                    ? [...state.categories].includes(curItem.category)
                    : true) && (state.time.length > 0 ? includesTime : true)
            );
        }),
    };
    const tempSort = {
        ...tempFilter,
        videos: tempFilter.videos.sort((vidOne, vidTwo) => {
            if (tempFilter.sortWay === "Oldest First") {
                return new Date(vidOne.dateOfUpload) - new Date(vidTwo.dateOfUpload);
            } else if (tempFilter.sortWay === "Newest First")
                return new Date(vidTwo.dateOfUpload) - new Date(vidOne.dateOfUpload);
            else if (tempFilter.sortWay === "Most viewed") {
                return vidTwo.views - vidOne.views;
            } else if (tempFilter.sortWay === "Most liked")
                return vidTwo.likes - vidOne.likes;
            else return tempFilter.videos;
        }),
    };
    return tempSort;
};

const convertToSeconds = (time) => {
    const arr = time.split(":").reverse();
    let seconds;
    if (arr.length === 3)
        seconds = Number(arr[0]) + Number(arr[1]) * 60 + Number(arr[2]) * 3600;
    else if (arr.length === 2) seconds = Number(arr[0]) + Number(arr[1]) * 60;
    else seconds = Number(arr[0]);
    return seconds;
};

export { setCategories, setTime, setTimeSort };
