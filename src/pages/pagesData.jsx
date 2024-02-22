import { BeerPage } from "./BeerPage";
import { HomePage } from "./HomePage";
import { RandomPage } from "./RandomPage";

const pages = [
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/:id",
		element: <BeerPage />,
	},
	{
		path: "/random",
		element: <RandomPage />,
	},
];

export default pages;
