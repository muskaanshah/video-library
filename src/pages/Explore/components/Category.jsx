import { useVideo } from "../../../context";
import { ACTION_TYPE } from "../../../utils";

function Category({ item }) {
    const { videoDispatch } = useVideo();
    return (
        <div
            className="input-wrapper color-white btn-category"
            onClick={() =>
                videoDispatch({
                    type: ACTION_TYPE.CATEGORIES,
                    payload: { value: item.categoryName },
                })
            }
        >
            <label>
                <input
                    type="checkbox"
                    value={item.categoryName}
                    onClick={() =>
                        videoDispatch({
                            type: ACTION_TYPE.CATEGORIES,
                            payload: { value: item.categoryName },
                        })
                    }
                />
                <span>{item.categoryName}</span>
            </label>
        </div>
    );
}

export { Category };
