const setCategories = (state, value) => {
    const temp = state.categories.includes(value)
        ? {
              ...state,
              categories: state.categories.filter((cur) => cur !== value),
          }
        : { ...state, categories: [...state.categories, value] };

    return temp;
};

const setTime = (state, value) => {
    const temp = state.time.includes(value)
        ? {
              ...state,
              time: state.time.filter((cur) => cur !== value),
          }
        : { ...state, time: [...state.time, value] };

    return temp;
};

const setTimeSort = (state, value) => {
    const temp = { ...state, sortByUploadTime: value };
    return temp;
};

const setViewsSort = (state, value) => {
    const temp = { ...state, sortByViews: value };
    return temp;
};

export { setCategories, setTime, setTimeSort, setViewsSort };
