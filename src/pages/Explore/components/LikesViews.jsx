function LikesViews({ item }) {
	return (
		<div className="input-wrapper color-white btn-category">
			<label>
				<input type="radio" name="upload-time" value={item} />
				<span>{item}</span>
			</label>
		</div>
	);
}

export { LikesViews };
