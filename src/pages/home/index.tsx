import { PosterCard } from "@/components/common";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useNowPlayingMovie } from "@/providers/movie";

const Home = () => {
	const { data } = useNowPlayingMovie();

	return (
		<div>
			<Swiper
				className="h-[800px]"
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				modules={[Autoplay]}>
				{data?.results.map((movie, index) => (
					<SwiperSlide key={index}>
						<PosterCard key={index} poster={movie} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Home;
