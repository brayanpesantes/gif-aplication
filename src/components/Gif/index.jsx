import React from "react";
import { Link } from "wouter";

const Gif = ({ title, id, url }) => {
	return (
		<Link to={`/gif/${id}`} className="card mb-2">
			<img
				loading="lazy"
				src={url}
				className="card-img-top"
				alt={title}
				style={{ height: "350px" }}
			/>
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<small>{id}</small>
			</div>
		</Link>
	);
};

export default Gif;
