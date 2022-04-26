import { Link } from "react-router-dom";
import { emptypage } from "../../assets";

function NoVideosToShow() {
    return (
        <div className="centered flex-column">
            <h2 className="color-white">There are no videos to show</h2>
            <Link
                to="/explore"
                className="btn bg-primary color-black borderradius-0-5 fw-500 p-1 fs-0-9"
            >
                Explore our collection
            </Link>
            <img src={emptypage} alt="404error" className="img-pagenotfound mt-1" />
        </div>
    );
}

export { NoVideosToShow };
