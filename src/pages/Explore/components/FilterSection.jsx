import { useState, useEffect } from "react";
import { useVideo } from "../../../context";
import { getCategory } from "../../../services";
import { ACTION_TYPE } from "../../../utils";
import { Category, Time, SortTabs } from "./";

function FilterSection() {
    const [categories, setCategories] = useState([]);
    const { videoDispatch } = useVideo();
    useEffect(() => {
        getCategory(setCategories);
    }, []);
    return (
        <div className="filter-section">
            <div>
                <div className="category-section">
                    <span className="category-name">Category: </span>
                    {categories.map((item) => (
                        <Category key={item._id} item={item} />
                    ))}
                </div>
                <div className="category-section my-0-5">
                    <span className="category-name">Time: </span>
                    {["Under 5 mins", "5-20 mins", "20-40 mins", "Over 40 mins"].map(
                        (item) => (
                            <Time key={item} item={item} />
                        )
                    )}
                </div>
                <div className="category-section my-0-5">
                    <span className="category-name">Sort: </span>
                    {["Newest First", "Oldest First", "Most viewed", "Most liked"].map(
                        (item) => (
                            <SortTabs key={item} item={item} />
                        )
                    )}
                </div>
            </div>
            <span
                className="fs-0-8 color-white text-underline"
                onClick={() => videoDispatch({ type: ACTION_TYPE.CLEAR_ALL })}
            >
                Clear all filters
            </span>
        </div>
    );
}

export { FilterSection };
