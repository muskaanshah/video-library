import { useVideo } from "../../../context";
import { ACTION_TYPE } from "../../../utils";
import "../explore.css";

function FilterBox({ categories, setFilterModal, modalRef }) {
    const { videoState, videoDispatch } = useVideo();
    return (
        <div className="filterbox-wrapper" ref={modalRef}>
            <div className="filterbox borderradius-1 p-1">
                <div className="filterbox-header">
                    <h2 className="my-0-5">Filter By</h2>
                    <button
                        className="btn bg-primary color-black borderradius-0-5 py-0-5 mr-0-5"
                        onClick={() => videoDispatch({ type: ACTION_TYPE.CLEAR_ALL })}
                    >
                        Clear
                    </button>
                    <button
                        className="btn bg-transparent color-white"
                        onClick={() => setFilterModal(false)}
                    >
                        <span className="material-icons-outlined">close</span>
                    </button>
                </div>
                <div className="filterbox-filters">
                    <div>
                        <h3 className="mb-0-5">Duration</h3>
                        <div className="divider-black bg-white mb-1"></div>
                        {["Under 5 mins", "5-20 mins", "20-40 mins", "Over 40 mins"].map(
                            (item) => (
                                <label className="display-block my-0-5">
                                    <input
                                        type="checkbox"
                                        value={item}
                                        onClick={() =>
                                            videoDispatch({
                                                type: ACTION_TYPE.TIME,
                                                payload: { value: item },
                                            })
                                        }
                                        checked={videoState.time.includes(item)}
                                    />
                                    <span className="fw-400">{item}</span>
                                </label>
                            )
                        )}
                    </div>
                    <div>
                        <h3 className="mb-0-5">Sort by</h3>
                        <div className="divider-black bg-white mb-1"></div>
                        {[
                            "Newest First",
                            "Oldest First",
                            "Most viewed",
                            "Most liked",
                        ].map((item) => (
                            <label className="display-block my-0-5">
                                <input
                                    type="radio"
                                    name="upload-time"
                                    value={item}
                                    onClick={() =>
                                        videoDispatch({
                                            type: ACTION_TYPE.SORT_WAY,
                                            payload: { value: item },
                                        })
                                    }
                                    checked={videoState.sortWay === item}
                                />
                                <span className="fw-400">{item}</span>
                            </label>
                        ))}
                    </div>
                    <div>
                        <h3 className="mb-0-5">Categories</h3>
                        <div className="divider-black bg-white mb-1"></div>
                        {categories.map((item) => (
                            <label className="display-block my-0-5">
                                <input
                                    type="checkbox"
                                    value={item.categoryName}
                                    className="btn-tab-input"
                                    checked={videoState.categories.includes(
                                        item.categoryName
                                    )}
                                    onClick={() =>
                                        videoDispatch({
                                            type: ACTION_TYPE.CATEGORIES,
                                            payload: { value: item.categoryName },
                                        })
                                    }
                                />
                                <span>{item.categoryName}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export { FilterBox };
