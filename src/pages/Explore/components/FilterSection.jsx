import { Category, LikesViews, Time, UploadTime } from "./";

function FilterSection() {
	return (
		<>
			<div className="category-section">
				<span className="category-name">Category: </span>
				{/* All of this is dummy data, will make proper data structures when adding logic */}
				{[
					"All",
					"Game Play",
					"Strategy",
					"Diy",
					"Unboxing",
					"All time favourites",
				].map((item) => (
					<Category item={item} />
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
