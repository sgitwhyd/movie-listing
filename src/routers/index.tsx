import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/home";
import Detail from "@/pages/detail";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/detail/:id",
		element: <Detail />,
	},
	{
		path: "*",
		element: <h1>Not Found</h1>,
	},
]);
