import axios from "axios";
import { API_KEY, API_URL } from "@/constants/movie";

const apiInstance = axios.create({
	baseURL: API_URL,
	headers: {
		Accept: "application/json",
		Authorization: `Bearer ${API_KEY}`,
	},
});

export default apiInstance;
