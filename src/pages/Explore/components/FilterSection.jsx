import { useState, useEffect } from "react";
import { getCategory } from "../../../services";
import { Category } from "./";
import { FilterBox } from "./FilterBox";

function FilterSection() {
    const [categories, setCategories] = useState([]);
    const [filterModal, setFilterModal] = useState(false);
    useEffect(() => {
        getCategory(setCategories);
    }, []);
    return (
        <div className="filter-section">
            <div>
                <div className="category-section">
                    <button
                        className="btn bg-transparent color-white border-white py-0-5"
                        onClick={() => setFilterModal(true)}
                    >
                        <span className="material-icons-outlined">blur_on</span>
                        <span>Filters</span>
                    </button>
                    {filterModal && (
                        <FilterBox
                            categories={categories}
                            setFilterModal={setFilterModal}
                        />
                    )}
                    {categories.map((item) => (
                        <Category key={item._id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export { FilterSection };
