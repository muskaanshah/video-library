import { useVideo } from "../../../context";
import { ACTION_TYPE } from "../../../utils";

function LikesViews({ item }) {
    const { videoDispatch } = useVideo();
    const dispatchFunction = () =>
        videoDispatch({
            type: ACTION_TYPE.VIEWSLIKES,
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
                />
                <span>{item}</span>
            </label>
        </div>
    );
}

export { LikesViews };
