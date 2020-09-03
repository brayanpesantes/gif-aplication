import React from "react";
import Gif from "../../components/Gif";
import useGlobalGifs from "../../hooks/useGlobalGifs";

const Detail = ({ params }) => {
	const gifs = useGlobalGifs();

	const gif = gifs.find((singleGif) => singleGif.id === params.id);

	return (
		<div className="col-4 offset-4 ">
			<Gif {...gif} />
		</div>
	);
};

export default Detail;
