import { Button } from "@/components/ui/button";
import { tmdbBaseImageUrl, tmdbImageSize } from "@/constants/movie";

import imdbLogo from "@/assets/imdb-logo.png";
import tomatoLogo from "@/assets/tomato-logo.png";
import playIcon from "@/assets/play-icon.png";

interface PosterCard {
	backdrop_path: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
}

export const PosterCard = ({ poster }: { poster: PosterCard }) => {
	return (
		<div className="absolute w-full h-full flex justify-center text-white">
			<div className=" w-full h-full flex items-center absolute  z-10 md:max-w-7xl">
				<div className="flex flex-col justify-center w-[400px] gap-4">
					<h1 className="text-5xl font-bold">{poster.title}</h1>
					<div className="flex gap-[34px]">
						<div className="flex items-center gap-2.5">
							<img src={imdbLogo} alt="" className="w-[35px] h-[17px]" />
							<p className="font-normal text-xs">{poster.popularity}</p>
						</div>
						<div className="flex items-center gap-2.5">
							<img src={tomatoLogo} alt="" className="w-4 h-[17px]" />
							<p className="font-normal text-xs">97%</p>
						</div>
					</div>
					<p className="font-medium text-[14px]">{poster.overview}</p>
					<Button className="py-[6px] px-4 bg-brand-rose/700 hover:bg-brand-rose/800 w-[170px]">
						<div className="flex items-center gap-2">
							<img src={playIcon} alt="" className="w-4 h-4" />
							<span className="font-bold text-[14px] uppercase">
								Watch Trailer
							</span>
						</div>
					</Button>
				</div>
			</div>
			<img
				src={tmdbBaseImageUrl + tmdbImageSize.original + poster.backdrop_path}
				alt={`${poster.title} poster image`}
				className="w-full h-max absolute object-cover  top-0 z-[9]"
			/>
		</div>
	);
};
