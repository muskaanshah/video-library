import { useVideo } from "../../../context";
import { ACTION_TYPE } from "../../../utils";

function Category({ item }) {
    const { videoState, videoDispatch } = useVideo();
    const dispatchFunction = () =>
        videoDispatch({
            type: ACTION_TYPE.CATEGORIES,
            payload: { value: item.categoryName },
        });
    return (
        <div
            className="input-wrapper color-white btn-category"
            onClick={dispatchFunction}
        >
            <label>
                <input
                    type="checkbox"
                    value={item.categoryName}
                    className="btn-tab-input"
                    checked={videoState.categories.includes(item.categoryName)}
                    onClick={dispatchFunction}
                />
                <span>{item.categoryName}</span>
            </label>
        </div>
    );
}

export { Category };
