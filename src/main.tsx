import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./configs/query.ts";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./index.css";
import "swiper/css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<App />
		</QueryClientProvider>
	</React.StrictMode>
);
