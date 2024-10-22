export const tmdbBaseImageUrl = "https://image.tmdb.org/t/p/";
export enum tmdbImageSize {
	original = "original",
	w500 = "w500",
	w1240 = "w1240",
}

export const paginateProperty = {
	pageSize: 20,
};

export const API_URL = import.meta.env.VITE_BASE_APIURL;
export const API_KEY = import.meta.env.VITE_API_KEY;
