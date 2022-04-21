import { useVideo } from "../../../context";
import { ACTION_TYPE } from "../../../utils";

function SortTabs({ item }) {
    const { videoState, videoDispatch } = useVideo();
    const dispatchFunction = () =>
        videoDispatch({
            type: ACTION_TYPE.SORT_WAY,
            payload: { value: item },
        });
    return (
        <div
            className="input-wrapper color-white btn-category"
            onClick={dispatchFunction}
        >
            <label>
                <input
                    type="radio"
                    name="upload-time"
                    value={item}
                    onClick={dispatchFunction}
                    checked={videoState.sortWay === item}
                />
                <span>{item}</span>
            </label>
        </div>
    );
}

export { SortTabs };
