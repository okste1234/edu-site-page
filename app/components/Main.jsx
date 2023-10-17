import About from "./About";
import Blog from "./Blog";
import Img from "./Img";
import Join from "./Join";
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
			<div>
				<Join />
			</div>
			<div>
				<Blog />
			</div>
		</div>
	);
};

export default Main;
