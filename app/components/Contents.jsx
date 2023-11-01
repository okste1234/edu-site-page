import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Main from "./Main";
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
