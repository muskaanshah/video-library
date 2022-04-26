import { useState, useEffect, useRef } from "react";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import { getCategory } from "../../../services";
import { Category } from "./";
import { FilterBox } from "./FilterBox";

function FilterSection() {
    const [categories, setCategories] = useState([]);
    const [filterModal, setFilterModal] = useState(false);
    const modalRef = useRef();
    const toggleRef = useRef();
    useOnClickOutside(modalRef, toggleRef, () => setFilterModal(false));
    useEffect(() => {
        getCategory(setCategories);
    }, []);
    return (
        <div className="filter-section">
            <div>
                <div className="category-section">
                    <button
                        className="btn bg-transparent color-white border-white py-0-5"
                        onClick={() => setFilterModal((prev) => !prev)}
                        ref={toggleRef}
                    >
                        <span className="material-icons-outlined">blur_on</span>
                        <span>Filters</span>
                    </button>
                    {filterModal && (
                        <FilterBox
                            categories={categories}
                            setFilterModal={setFilterModal}
                            modalRef={modalRef}
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
