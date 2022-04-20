import { useVideo } from "../../../context";
import { ACTION_TYPE } from "../../../utils";

function Time({ item }) {
    const { videoDispatch } = useVideo();
    return (
        <div
            className="input-wrapper color-white btn-category"
            onClick={() =>
                videoDispatch({
                    type: ACTION_TYPE.TIME,
                    payload: { value: item },
                })
            }
        >
            <label>
                <input
                    type="checkbox"
                    value={item}
                    onClick={() =>
                        videoDispatch({
                            type: ACTION_TYPE.TIME,
                            payload: { value: item },
                        })
                    }
                />
                <span>{item}</span>
            </label>
        </div>
    );
}

export { Time };
