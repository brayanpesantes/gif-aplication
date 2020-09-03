import { API_KEY, URL } from "./Settings";

export const getGifs = ({ keyword = "panda" }) => {
	const apiURL = `${URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;

	return fetch(apiURL)
		.then((res) => res.json())
		.then((response) => {
			const { data = [] } = response;
			if (Array.isArray(data)) {
				const gifs = data.map((image) => {
					const { images, title, id } = image;
					const { url } = images.downsized_medium;
					return { title, id, url };
				});
				return gifs;
			}
		});
};

// export const fromApiResponseToGifs = (apiResponse) => {
// 	const { data = [] } = apiResponse;
// 	if (Array.isArray(data)) {
// 		const gifs = data.map((image) => {
// 			const { images, title, id } = image;
// 			const { url } = images.downsized_medium;
// 			return { title, id, url };
// 		});
// 		return gifs;
// 	}
// 	return [];
// };

// export default function getTrendingTrems() {
// 	const apiURL = `${URL}/treding/shearches?api_key=${API_KEY}`;

// 	return fetch(apiURL)
// 		.then((res) => res.json())
// 		.then(fromApiResponseToGifs);
// }
