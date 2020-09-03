import React from "react";
import ListOfGif from "../../components/ListOfGif";
import Spinner from "../../components/Spinner";
import { useGifs } from "../../hooks/useGifs";

const SearchResults = ({ params }) => {
	const { keyword } = params;
	const { loading, gifs } = useGifs({ keyword });

	return (
		<div>
			{loading ? (
				<div className="col-md-4 offset-4">
					<Spinner />
				</div>
			) : (
				<ListOfGif gifs={gifs} />
			)}
		</div>
	);
};

export default SearchResults;
