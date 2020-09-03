import React, { useState, useEffect } from "react";
import getTrendingTrems from "../../services/getTrendingTremsService";
import Category from "../Category";

const TrendingSearches = () => {
	const [trends, setTrends] = useState([]);

	useEffect(() => {
		getTrendingTrems().then(setTrends);
	}, []);

	return (
		<div>
			<Category name="Tendencias" options={trends} />
		</div>
	);
};

export default TrendingSearches;
