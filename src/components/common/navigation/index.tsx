import WebLogo from "@/assets/logo.png";

export const Navigation = () => {
	return (
		<header className=" py-4 text-white absolute w-full z-10">
			<nav className="w-full md:max-w-7xl mx-auto flex items-center">
				<a href="#" className="w-10 h-10">
					<img src={WebLogo} alt="Logo" />
				</a>
				<div className="ml-auto flex gap-4">
					<a href="#" className="py-3 px-4 font-semibold text-brand-grey/200">
						Movies
					</a>
					<a href="#" className="py-3 px-4 font-semibold text-brand-grey/200">
						TV Show
					</a>
				</div>
			</nav>
		</header>
	);
};
