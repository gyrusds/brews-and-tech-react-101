import { useEffect, useState } from "react";
import { BeerDetails } from "../../components/BeerDetails";
import { getRandomBeer } from "../../services/punkService";

export const RandomPage = () => {
	const [beer, setBeer] = useState(null);

	const retrieveBeer = async () => {
		const { data, err } = await getRandomBeer();
		if (!err) setBeer(data?.[0]);
	};

	useEffect(() => {
		retrieveBeer();
	}, []);

	return beer && <BeerDetails beer={beer} />;
};
