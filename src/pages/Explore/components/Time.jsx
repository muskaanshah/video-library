function Time({ item }) {
	return (
		<div className="input-wrapper color-white btn-category">
			<label>
				<input
					type="checkbox"
					value={item}
					onChange={() => console.log("ticked")}
				/>
				<span>{item}</span>
			</label>
		</div>
	);
}

export { Time };
