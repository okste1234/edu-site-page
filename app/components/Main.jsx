import About from "./About";
import Footer from "./Footer";
import Img from "./Img";
import Why from "./Why";

const Main = () => {
	return (
		<div>
			<div className="bg-[#0a0a0a]">
				<About />
			</div>

			<div>
				<Img />
			</div>
			<div className="">
				<Why />
			</div>
			<footer className="">
				<Footer />
			</footer>
		</div>
	);
};

export default Main;
