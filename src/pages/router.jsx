import { Route, Routes } from "react-router-dom";
import pagesData from "./pagesData";

const Router = () => {
	const pageRoutes = pagesData.map(({ path, element }, idx) => {
		return <Route key={idx} path={`/${path}`} element={element} />;
	});

	return <Routes>{pageRoutes}</Routes>;
};

export default Router;
