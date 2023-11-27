import apiInstance from "@/libs/axios";
import { useQuery } from "@tanstack/react-query";
import { IMovieResponse } from "@/interfaces/movie";

export const useNowPlayingMovie = () => {
	return useQuery<IMovieResponse>({
		queryKey: ["Fetch now playing movie"],
		queryFn: async () => {
			const response = await apiInstance.get("/movie/now_playing", {
				params: {
					language: "en-US",
					page: 1,
				},
			});
			return response.data;
		},
	});
};
