import WebLogo from "@/assets/logo.png";
import clsx from "clsx";
import { Link } from "react-router-dom";

export const Navigation = ({ customClass }: { customClass?: string }) => {
	return (
		<header className={clsx("py-4 text-white  w-full z-10", customClass)}>
			<nav className="w-full md:max-w-7xl mx-auto flex items-center">
				<Link to="/" className="w-10 h-10">
					<img src={WebLogo} alt="Logo" />
				</Link>
				<div className="ml-auto flex gap-4">
					<Link to="#" className="py-3 px-4 font-semibold text-brand-grey/200">
						Movies
					</Link>
					<Link to="#" className="py-3 px-4 font-semibold text-brand-grey/200">
						TV Show
					</Link>
				</div>
			</nav>
		</header>
	);
};
