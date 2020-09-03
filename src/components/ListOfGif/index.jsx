import React from "react";
import Gif from "../Gif";

const ListOfGif = ({ gifs }) => {
	console.log("-");
	return (
		<>
			<div className="row">
				{gifs.map(({ id, title, url }) => (
					<div className="col-12 col-sm-2 col-md-4 col-lg-3" key={id}>
						<Gif id={id} title={title} url={url} />
					</div>
				))}
			</div>
		</>
	);
};

export default ListOfGif;
