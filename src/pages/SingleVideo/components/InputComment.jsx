import { useState } from "react";
import { useAuth } from "../../../context";

function InputComment({ setCommentsState, commentsState }) {
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
                userName: user.firstName + user.lastName,
                comment: inputValue,
                commentDate: getDateInDesiredFormat(),
                color: "#f5cb5c",
            },
        ];
        setCommentsState(newState);
        setInputValue("");
    };
    return (
        <div className="add-comment mb-2">
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
            <div
                className={`${
                    inputValue.length > 0 ? "visibility-shown" : "visibility-hidden"
                } centered`}
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
