import { useState, useEffect } from "react";
import { getCategory } from "../../../services";
import { Category, LikesViews, Time, UploadTime } from "./";

function FilterSection() {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		getCategory(setCategories);
	}, [])
	return (
		<>
			<div className="category-section">
				<span className="category-name">Category: </span>
				{categories.map((item) => (
					<Category key={item._id} item={item} />
				))}
			</div>
			<div className="category-section my-0-5">
				<span className="category-name">Time: </span>
				{["Under 5 mins", "5-20 mins", "20-40 mins", "Over 40 mins"].map(
					(item) => (
						<Time item={item} />
					)
				)}
			</div>
			<div className="category-section my-0-5">
				<span className="category-name">Based on upload time: </span>
				{["Newest First", "Oldest First"].map((item) => (
					<UploadTime item={item} />
				))}
			</div>
			<div className="category-section my-0-5">
				<span className="category-name">Sort: </span>
				{["Most viewed", "Most Liked"].map((item) => (
					<LikesViews item={item} />
				))}
			</div>
		</>
	);
}

export { FilterSection };
