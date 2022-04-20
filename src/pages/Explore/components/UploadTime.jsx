import { useVideo } from "../../../context";
import { ACTION_TYPE } from "../../../utils";

function UploadTime({ item }) {
    const { videoDispatch } = useVideo();
    return (
        <div className="input-wrapper color-white btn-category">
            <label>
                <input
                    type="radio"
                    name="upload-time"
                    value={item}
                    onChange={() =>
                        videoDispatch({
                            type: ACTION_TYPE.SORT_TIME,
                            payload: { value: item },
                        })
                    }
                />
                <span>{item}</span>
            </label>
        </div>
    );
}

export { UploadTime };
