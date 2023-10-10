import React from "react";

const About = () => {
	return (
		<div className="min-h-[580px] pt-[70px] px-5 lg:px-10 xl:px-1 text-white max-w-7xl m-auto">
			<div className="lg:flex m-auto">
				<div className="w-[55%] px-6">
					<h3 className="text-xs font-semibold text-[#e97be2] tracking-[4px] pb-6">
						WHO WE ARE
					</h3>
					<p className=" font-medium text-4xl tracking-[2px]">
						The best online learning platform With the aim of impacting minds.
						Crafted specially to bring out the champions in students.
					</p>
				</div>
				<div className="w-[45%] pr-1 font-medium">
					<p className="text-[#9b9aad] text-[26px]">
						With our intensive and supervised online classes holding on Whatsapp
						and telegram at cost friendly prices, you can be so sure that
						getting knowledge has never been easier.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
