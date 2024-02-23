import { Outlet } from "react-router-dom";
import { Layout } from "../components/Layout";
import { getBeers, getRandomBeer } from "../services/punkService";
import { BeerPage } from "./BeerPage";
import { HomePage } from "./HomePage";

const pages = [
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <HomePage />,
				loader: async () => {
					const { data } = await getBeers();
					return data;
				},
			},
			{
				path: "/:id",
				element: <BeerPage />,
				loader: async ({ params }) => {
					const { id } = params;
					const { data } = await getBeers(id);
					return data?.[0];
				},
			},
			{
				path: "/random",
				element: <BeerPage />,
				loader: async () => {
					const { data } = await getRandomBeer();
					return data?.[0];
				},
			},
		],
	},
];

export default pages;
