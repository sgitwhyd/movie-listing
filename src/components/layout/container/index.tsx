import React from "react";
import { Navigation } from "@/components/common/";

export const Container = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<Navigation />
			<main>
				{children}
				<div className="w-full md:max-w-7xl mx-auto relative min-h-screen">
					<div className="w-[400px] h-[250px] bg-brand-primary/900 rounded-[400px] rotate-[-135deg] blur-[175px] absolute right-0 top-[60px]"></div>
					<div className="w-[400px] h-[250px] bg-brand-primary/800 rounded-[400px] rotate-[-135deg] blur-[175px] absolute left-0 top-[40%]"></div>
				</div>
			</main>
		</div>
	);
};
