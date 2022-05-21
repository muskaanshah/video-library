import { useState } from "react";
import { useAuth } from "../../../context";
import { addComment } from "../../../services";

function InputComment({ setCommentsState, commentsState, videoId }) {
    const [inputValue, setInputValue] = useState("");
    const { user } = useAuth();
    const getDateInDesiredFormat = () => {
        const date = new Date();
        let strDate = "";
        const shortMonth = date.toLocaleString("en-us", { month: "short" });
        strDate = `${shortMonth} ${date.getDate()}, ${date.getFullYear()}`;
        return strDate;
    };
    const addCommentHandler = () => {
        const newState = [
            ...commentsState,
            {
                userName: `${user.firstName} ${user.lastName}`,
                comment: inputValue,
                commentDate: getDateInDesiredFormat(),
                color: "#f5cb5c",
            },
        ];
        addComment(videoId, newState, setCommentsState);
        // setCommentsState(newState);
        setInputValue("");
    };
    return (
        <div className="add-comment-wrapper">
            <div className="add-comment">
                <span className="borderradius-full avatar-default-sm bg-primary" alt="dp">
                    {user.firstName[0]}
                </span>
                <input
                    type="text"
                    placeholder="Add a comment"
                    className="input-comment color-white fs-1"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") addCommentHandler();
                    }}
                />
            </div>
            <div
                className={`${
                    inputValue.trim().length > 0
                        ? "visibility-shown"
                        : "visibility-hidden"
                } comment-button-wrapper`}
            >
                <button
                    className="btn bg-transparent text-underline color-white"
                    onClick={() => setInputValue("")}
                >
                    Clear
                </button>
                <button
                    className="btn bg-primary color-black borderradius-0-5 fs-0-9"
                    onClick={addCommentHandler}
                >
                    Comment
                </button>
            </div>
        </div>
    );
}

export { InputComment };
