import axios from "axios";

const punkService = axios.create({
	baseURL: "https://api.punkapi.com/v2/",
});

export const getBeers = async () => {
	return await punkService
		.get("beers")
		.then((res) => res)
		.catch((err) => ({ data: null, err }));
};

export const getBeer = async (id: number) => {
	return await punkService
		.get(`beers/${id}`)
		.then((res) => res)
		.catch((err) => ({ data: null, err }));
};

export const getRandomBeer = async () => {
	return await punkService
		.get("beers/random")
		.then((res) => res)
		.catch((err) => ({ data: null, err }));
};
