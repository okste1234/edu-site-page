import Footer from "./Footer";

const Contents = ({ children }) => {
	return (
		<div className="-z[1]">
			{children}
			<footer className="">
				<Footer />
			</footer>
		</div>
	);
};

export default Contents;
