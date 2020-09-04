import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { useGifs } from "hooks/useGifs";
import ListOfGif from "components/ListOfGif";
import Spinner from "components/Spinner";
import TredingShearches from "components/TrendingSearches";

const POPULARES_GIFS = ["matrix", "peru", "machupichu", "cajamarca"];

const Home = () => {
	const [keyword, setKeyword] = useState("");
	const [path, pushLocation] = useLocation();

	const { loading, gifs } = useGifs();

	const handleSubmit = (event) => {
		event.preventDefault();
		pushLocation(`/search/${keyword}`);
	};

	const handleChange = (event) => {
		setKeyword(event.target.value);
	};

	return (
		<>
			<div className="container">
				<div className="jumbotron ">
					<div className="col-12 col-md-6 offset-md-4">
						<form className="form-inline" onSubmit={handleSubmit}>
							<div className="input-group mb-3">
								<input
									type="text"
									className="form-control p-4"
									placeholder="Recipient's username"
									aria-label="Recipient's username"
									aria-describedby="button-addon2"
									onChange={handleChange}
								/>
								<div className="input-group-append">
									<button
										className="btn btn-primary"
										type="submit"
										id="button-addon2"
									>
										Buscar
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<h3>Última Búsqueda</h3>

			{loading ? (
				<div className="col-md-4 offset-4">
					<Spinner />
				</div>
			) : (
				<ListOfGif gifs={gifs} />
			)}
			<div>
				<TredingShearches />
			</div>
		</>
	);
};

export default Home;
