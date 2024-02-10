import React from "react";

const About = () => {
	return (
		<div className="pb-52 pt-12 md:pt-16 lg:pt-24 lg:px-10 px-6 text-white max-w-[1450px] m-auto">
			<div className="flex sm:flex-row flex-col m-auto flex-nowrap flex-shrink-0">
				<div className="lg:w-[55%] lg:px-6 py-5 sm:py-0">
					<h3 className="text-xs font-bold text-[#de3bff] tracking-[4px] pb-1 lg:pb-6">
						WHO WE ARE
					</h3>
					{/* #e97be2  */}
					<p className=" font-medium text-3xl lg:text-4xl tracking-[2px]">
						The best online learning platform With the aim of impacting minds.
						Crafted specially to bring out the champions in students.
					</p>
				</div>
				<div className="lg:w-[45%] lg:pr-1 font-normal">
					<p className="text-[#9b9aad] lg:text-[26px] text-2xl">
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
