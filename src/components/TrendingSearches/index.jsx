import React, { Suspense } from "react";
import useNerScreen from "hooks/useNerScreen";
import Spinner from "components/Spinner";
const TrendingSearches = React.lazy(() => import("./TredingSearches"));

export default function LazyTrending() {
	const { isNearScreen, fromRef } = useNerScreen({ distancie: "200px" });

	return (
		<div ref={fromRef}>
			<Suspense fallback={<Spinner />}>
				{isNearScreen ? <TrendingSearches /> : <Spinner />}
			</Suspense>
		</div>
	);
}
