"use client";

import React, { useEffect, useState } from "react";
import Pag from "./Pag";

const Why = () => {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<div className="pt-20 m-auto">
			<div className="h-screen max-w-7xl m-auto">
				<div>
					<Pag style={{ transform: `translateY(-${scrollY}px)` }} />

					<Pag style={{ transform: `translateY(-${scrollY}px)` }} />

					<Pag style={{ transform: `translateY(-${scrollY}px)` }} />

					<Pag style={{ transform: `translateY(-${scrollY}px)` }} />

					<Pag style={{ transform: `translateY(-${scrollY}px)` }} />
				</div>
			</div>
		</div>
	);
};

export default Why;
