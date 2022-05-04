import { Link } from "react-router-dom";
import { useVideo } from "../../context";
import { itemListCalculation } from "../../utils/ItemListCalculation";
import { Highlight } from "./Highlight";

function SearchList() {
    const { videoState } = useVideo();
    return (
        <div className="search-list">
            {videoState.searchText !== "" &&
                itemListCalculation(videoState)
                    .filter((_, index) => index < 5) // _ because item not used
                    .map((item) => (
                        <Link
                            style={{ color: "inherit", textDecoration: "inherit" }}
                            to={`/explore/${item._id}`}
                            key={item._id}
                        >
                            <p className="search-item fs-0-9">
                                <Highlight
                                    text={item.title}
                                    highlight={videoState.searchText}
                                />
                            </p>
                        </Link>
                    ))}
        </div>
    );
}

export { SearchList };
