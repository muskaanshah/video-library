import { Link } from "react-router-dom";
import { error } from "../../assets";
import "../../index.css";

function PageNotFound() {
    return (
        <div className="container-body centered flex-column">
            <img src={error} alt="404error" className="img-pagenotfound" />
            <Link
                to="/"
                className="btn bg-primary color-black borderradius-0-5 fw-500 p-1 fs-0-9"
            >
                Go to Home
            </Link>
        </div>
    );
}

export { PageNotFound };
