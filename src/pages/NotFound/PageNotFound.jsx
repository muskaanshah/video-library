import { Link } from "react-router-dom";
import { error } from "../../assets";
import "../../index.css";

function PageNotFound() {
    return (
        <div className="container-body centered flex-column">
            <img src={error} alt="404error" className="img-pagenotfound" />
            <h2 className="color-white">404 error: Page not found</h2>
            <Link to="/" className="btn bg-primary color-black borderradius-0-5">
                Go to Home
            </Link>
        </div>
    );
}

export { PageNotFound };
