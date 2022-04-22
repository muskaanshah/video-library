function roundTo(num, roundNumber) {
    return +(Math.round(num + `e+${roundNumber}`) + `e-${roundNumber}`);
}

const calculateViews = (views) => {
    let viewsInDesiredFormat;
    if (views / 1000000 > 1) viewsInDesiredFormat = `${roundTo(views / 1000000, 2)}M`;
    else if (views / 1000 > 1) viewsInDesiredFormat = `${roundTo(views / 1000, 2)}K`;
    else viewsInDesiredFormat = views;
    return viewsInDesiredFormat;
};

const calculateLikes = (likes) => {
    let likesInDesiredFormat;
    if (likes / 1000000 > 1) likesInDesiredFormat = `${roundTo(likes / 1000000, 1)}M`;
    else if (likes / 1000 > 1) likesInDesiredFormat = `${roundTo(likes / 1000, 1)}K`;
    else likesInDesiredFormat = likes;
    return likesInDesiredFormat;
};

const calculateDate = (dateOfUpload) => {
    const uploadDate = new Date(dateOfUpload);
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - uploadDate);
    const diffInYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
    const diffInMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30));
    const diffInDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffInMinutes = Math.floor(diffTime / (1000 * 60 * 60));
    let timeInDesiredFormat;
    if (diffInYears > 0)
        timeInDesiredFormat = `${diffInYears} ${diffInYears === 1 ? "year" : "years"}`;
    else if (diffInMonths > 0)
        timeInDesiredFormat = `${diffInMonths} ${
            diffInMonths === 1 ? "month" : "months"
        }`;
    else if (diffInDays > 0)
        timeInDesiredFormat = `${diffInDays} ${diffInDays === 1 ? "day" : "days"}`;
    else
        timeInDesiredFormat = `${diffInMinutes} ${
            diffInMinutes === 1 ? "minute" : "minutes"
        }`;
    return timeInDesiredFormat;
};

export { calculateViews, calculateDate, calculateLikes };
