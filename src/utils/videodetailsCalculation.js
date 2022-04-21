function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}

const calculateViews = (views) => {
    let viewsInDesiredFormat;
    if (views / 1000000 > 1) viewsInDesiredFormat = `${roundToTwo(views / 1000000)}M`;
    else if (views / 1000 > 1) viewsInDesiredFormat = `${roundToTwo(views / 1000)}K`;
    else viewsInDesiredFormat = views;
    return viewsInDesiredFormat;
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

export { calculateViews, calculateDate };
