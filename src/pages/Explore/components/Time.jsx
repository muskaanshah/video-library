import { useVideo } from "../../../context";
import { ACTION_TYPE } from "../../../utils";

function Time({ item }) {
    const { videoState, videoDispatch } = useVideo();
    const dispatchFunction = () =>
        videoDispatch({
            type: ACTION_TYPE.TIME,
            payload: { value: item },
        });
    return (
        <div
            className="input-wrapper color-white btn-category"
            onClick={dispatchFunction}
        >
            <label>
                <input
                    type="checkbox"
                    value={item}
                    onChange={dispatchFunction}
                    checked={videoState.time.includes(item)}
                />
                <span>{item}</span>
            </label>
        </div>
    );
}

export { Time };
