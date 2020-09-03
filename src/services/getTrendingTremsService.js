import { API_KEY, URL } from "./Settings";

export const fromApiResponseToGifs = (apiResponse) => {
	const { data = [] } = apiResponse;

	return data;
};

export default function getTrendingTrems() {
	const apiURL = `${URL}/trending/searches?api_key=${API_KEY}`;

	return fetch(apiURL)
		.then((res) => res.json())
		.then(fromApiResponseToGifs);
}
