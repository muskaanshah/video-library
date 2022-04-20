function Category({ item }) {
	return (
		<div className="input-wrapper color-white btn-category">
			<label>
				<input
					type="checkbox"
					value={item.categoryName}
					onChange={() => console.log("ticked")}
				/>
				<span>{item.categoryName}</span>
			</label>
		</div>
	);
}

export { Category };
