import React from "react";
import { Link } from "wouter";

const Category = ({ name, options }) => {
	return (
		<div>
			<h3 className="card-title">{decodeURI(name)}</h3>
			<ul className="list-group list-group-flush">
				{options.map((options) => (
					<li className="list-group-item" key={options}>
						<Link to={`/search/${options}`}>{options}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Category;
