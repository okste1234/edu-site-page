import Navbar from "./Navbar";
import Footer from "./Footer";

const Contents = ({ children }) => {
	return (
		<div className="-z[1]">
			<nav className="top-0 sticky w-full bg-base-100 z-50">
				<Navbar />
			</nav>
			<div>
				{children}
			</div>
			<footer className="">
				<Footer />
			</footer>
		</div>
	);
};

export default Contents;
