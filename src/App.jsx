import React from "react";
import { Route, Link } from "wouter";
import Home from "./page/Home";
import Detail from "./page/Detail";
import SearchResults from "./page/SearchResults";
import "./App.css";
import StaticContext from "./context/StaticContext";
import { GifsContextProvider } from "./context/GifsContext";

const App = () => {
	return (
		<StaticContext.Provider
			value={{
				name: "alexis",
				suscribeteAlCanal: true,
			}}
		>
			<div>
				<div className="col-4 offset-4 mt-5 pointer mt-2 logo">
					<Link to="/">
						<img
							style={{ height: 125, width: 150 }}
							className="rounded img-thumbnail mx-auto d-block"
							src="https://cdn.lowgif.com/full/2796eb823b5e8b65-batman-logo-gifs-find-share-on-giphy.gif"
							alt="logo"
						/>
					</Link>
				</div>
				<div className="mt-4">
					<GifsContextProvider>
						<Route component={Home} path="/" />
						<Route component={SearchResults} path="/search/:keyword" />
						<Route component={Detail} path="/gif/:id" />
					</GifsContextProvider>
				</div>
			</div>
		</StaticContext.Provider>
	);
};

export default App;
