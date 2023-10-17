import React from "react";

const Img = () => {
	return (
		<div className="bg-[#eceff3]">
			<div className="relative -top-56 flex justify-between px-5 lg:px-10 xl:px-3 max-w-7xl m-auto">
				<div className="relative bg-cover bg-center bg-no-repeat">
					<div className="bg-[#81105b]/40 absolute w-[500px] left-3 h-[355px] z-10 rounded"></div>
					<div className="stack">
						<img
							src="/t.jpg"
							width={130}
							height={130}
							className="w-[500px] rounded -z[1]"
							alt="what we do"
						/>

						<div className="-z[1] grid w-[520px] h-[280px] rounded bg-[#fdc000] text-accent-content place-content-center"></div>
					</div>

					<div className="z-20 absolute -bottom-14 right-24 px-8 py-14 text-center bg-white text-[#510f4d] text-xl">
						<h3 className="font-bold">Number of students reached</h3>
						<p className="font-extrabold">40k</p>
						<a href=""></a>
					</div>
				</div>

				<div className="relative bg-cover bg-center bg-no-repeat">
					<div className="bg-[#81105b]/40 absolute w-[530px] left-3 h-[355px] z-10 rounded"></div>
					<div className="stack -z[1]">
						<img
							src="/s1.jpg"
							width={130}
							height={130}
							className="w-[530px] rounded"
							alt="what we do"
						/>
						<div className="grid w-[550px] h-[280px] rounded bg-[#fdc000] place-content-center"></div>
					</div>
					{/*  left-16*/}
					<div className="z-20 absolute -bottom-14 right-28 px-14 py-10 text-center bg-white text-[#510f4d] text-xl font-bold">
						<h3>
							Percentage of students <br /> admitted through us
						</h3>
						<p className="font-extrabold">95%</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Img;
