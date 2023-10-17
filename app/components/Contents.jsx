import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Main from "./Main";
import Footer from "./Footer";

const Contents = () => {
	return (
		<div className="-z[1]">
			<nav className="top-0 sticky w-full bg-base-100 z-50">
				<Navbar />
			</nav>
			<header>
				<Hero />
			</header>
			<section className="relative">
				<Main />
			</section>
			<footer className="">
				<Footer />
			</footer>
		</div>
	);
};

export default Contents;
