import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BeerDetails } from "../../components/BeerDetails";
import { getBeer } from "../../services/punkService";

export const BeerPage = () => {
	const [beer, setBeer] = useState(null);

	const { id } = useParams();

	const retrieveBeer = async () => {
		const { data, err } = await getBeer(id);
		if (!err) setBeer(data?.[0]);
	};

	useEffect(() => {
		if (!!id) retrieveBeer(id);
	}, [id]);

	return beer && <BeerDetails beer={beer} />;
};
