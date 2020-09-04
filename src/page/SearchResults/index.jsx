import React from "react";
import ListOfGif from "components/ListOfGif";
import Spinner from "components/Spinner";
import { useGifs } from "hooks/useGifs";
import "./SearchResul.css";

const SearchResults = ({ params }) => {
	const { keyword } = params;
	const { loading, gifs, setPage } = useGifs({ keyword });

	const handleNextPage = () => {
		setPage((prevPage) => prevPage + 1);
	};
	return (
		<div>
			{loading ? (
				<div className="col-md-4 offset-4">
					<Spinner />
				</div>
			) : (
				<div className="list-app">
					<h3>{decodeURI(keyword)}</h3>
					<ListOfGif gifs={gifs} />
				</div>
			)}
			<div className="col-4 offset-4">
				<button className="btn btn-primary btn-block" onClick={handleNextPage}>
					Get next Page
				</button>
			</div>
		</div>
	);
};

export default SearchResults;
