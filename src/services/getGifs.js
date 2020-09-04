import { API_KEY, URL } from "./Settings";

export const getGifs = ({ limit = 25, keyword = "panda", page = 0 }) => {
	const apiURL = `${URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
		page * limit
	}&rating=g&lang=en`;

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
