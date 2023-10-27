import React from "react";

const Img = () => {
	return (
		<div className="bg-[#eceff3]">
			<div className="relative -top-32 flex justify-evenly px-5 lg:px-10 xl:px-3 max-w-7xl m-auto">
				<div className="relative bg-cover bg-center bg-no-repeat">
					<div className="bg-[#a854b9]/10 absolute w-[400px] -left-[0] h-[290px] z-10 rounded">
						{/* #81105b */}
					</div>
					<div className="stack w-[400px]">
						<img
							src="/t.jpg"
							width="100%"
							height={280}
							className="rounded -z[1]"
							alt="what we do"
						/>

						<div className="grid w-[400px] h-[130px] rounded bg-[#fdc000] text-accent-content place-content-center"></div>
					</div>

					<div className="z-20 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-6 text-center bg-white text-[#510f4d] text-xl">
						<h3 className="font-bold">Number of students reached</h3>
						<p className="font-extrabold">40k</p>
					</div>
				</div>

				<div className="relative bg-cover bg-center bg-no-repeat">
					<div className="bg-[#a854b9]/10 absolute w-[420px] left-[0] h-[285px] z-10 rounded"></div>
					<div className="stack -z[1] w-[400px]">
						<img
							src="/s1.jpg"
							width="100%"
							height={280}
							className="rounded h-[280px]"
							alt="what we do"
						/>
						<div className="grid w-[420px] h-[130px] rounded bg-[#fdc000] place-content-center"></div>
					</div>
					{/*  left-16*/}
					<div className="z-20 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 px-6 py-3 text-center bg-white text-[#510f4d] text-xl">
						<h3 className="font-bold">
							Percentage of students admitted through us
						</h3>
						<p className="font-extrabold">95%</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Img;
