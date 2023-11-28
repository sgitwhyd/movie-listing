import { PosterCard, MovieCard } from "@/components/common";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {
	useMovieGenre,
	useUpcomingMovies,
	useTrendingMovies,
} from "@/providers/movie";
import Pagination from "rc-pagination";
import { useState, useRef } from "react";
import { Container } from "@/components/layout";
import { HomeSkeleton } from "@/components/skeleton";

const Home = () => {
	const [page, setPage] = useState(1);
	const upcomingRef = useRef<HTMLHeadingElement>(null);

	const { data: trendingMovies, isLoading: isLoadingTrending } =
		useTrendingMovies();
	const { data: genresData, isLoading: isLoadingGenres } = useMovieGenre();
	const { data: upComingMovies, isLoading: isLoadingUpcoming } =
		useUpcomingMovies({
			page,
		});

	const isLoading = isLoadingTrending || isLoadingGenres || isLoadingUpcoming;

	const handlePageChange = (page: number) => {
		if (upcomingRef.current) {
			upcomingRef.current.scrollIntoView({
				behavior: "smooth",
			});
		}
		setPage(page);
	};

	if (isLoading) {
		return <HomeSkeleton />;
	}

	return (
		<Container customClass="absolute">
			<Swiper
				className="h-[800px]"
				loop
				autoplay={{
					delay: 3500,
					disableOnInteraction: false,
				}}
				modules={[Autoplay]}>
				{trendingMovies?.results.map((movie, index) => (
					<SwiperSlide key={index}>
						<PosterCard key={index} poster={movie} />
					</SwiperSlide>
				))}
			</Swiper>

			<div className="w-full md:max-w-7xl mx-auto relative min-h-screen mt-[70px] ">
				<h1
					className="font-bold text-4xl text-brand-grey/400"
					ref={upcomingRef}>
					Up Coming Movie
				</h1>
				{isLoading ? (
					<p>Loading</p>
				) : (
					<>
						<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-11">
							{upComingMovies?.results.map((movie) => (
								<MovieCard
									key={movie.id}
									movie={movie}
									genres={genresData?.genres}
								/>
							))}
						</div>
						<div className="float-right">
							<Pagination
								className="mt-12"
								total={upComingMovies?.total_results}
								pageSize={20}
								current={page}
								onChange={handlePageChange}
							/>
						</div>
					</>
				)}
			</div>
		</Container>
	);
};

export default Home;
