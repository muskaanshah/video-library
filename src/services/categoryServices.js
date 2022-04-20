import axios from "axios";

const getCategory = async (setCategories) => {
    try {
        const res = await axios.get("/api/categories");
        setCategories(res.data.categories);
    } catch (err) {
        console.error(err.message);
    }
};

export { getCategory };
