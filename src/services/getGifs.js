const KEY_API = "S50c2vSfEgs6HL1W3P6rtX7b6xVAParH";

export const getGifs = ({ keyword = "panda" }) => {
	const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${KEY_API}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;

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
