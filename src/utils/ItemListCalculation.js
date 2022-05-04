const itemListCalculation = (videoState) => {
    const itemStartsWith = videoState.default.filter((item) =>
        item.title.toLowerCase().startsWith(videoState.searchText.toLowerCase())
    );
    const itemIncludes = videoState.default.filter((item) =>
        item.title.toLowerCase().includes(videoState.searchText.toLowerCase())
    );
    const itemIncludesNotInStartsWith = itemIncludes.reduce((acc, curr) => {
        const itemAlreadyPresent = itemStartsWith.find(
            (curItem) => curItem._id === curr._id
        );
        return itemAlreadyPresent ? acc : [...acc, curr];
    }, []);
    const finalItemList = itemStartsWith.concat(itemIncludesNotInStartsWith);
    return finalItemList;
};

export { itemListCalculation };
