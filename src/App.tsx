import { Container } from "./components/layout";
import Home from "@/pages/home";

const App = () => {
	return (
		<div className="bg-brand-main  relative">
			<Container>
				<Home />
			</Container>
		</div>
	);
};

export default App;
