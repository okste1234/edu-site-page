import React from "react";

const Img = () => {
	return (
		<div className="relative -top-32 flex xs:flex-row flex-col items-center justify-evenly px-5 sm:px-0 max-w-[1450px] space-x-4 m-auto space-y-9 xs:space-y-0">
			<div className="relative bg-cover bg-center bg-no-repeat xl:w-[400px] w-80 h-56 xl:h-[290px]">
				<div className="bg-[#a854b9]/10 absolute w-full h-full z-10 rounded">
					{/* #81105b */}
				</div>
				<div className="">
					<img
						src="/t.jpg"
						width="100%"
						height="100%"
						className="rounded -z[1]"
						alt="what we do"
					/>
				</div>

				<div className="z-20 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 p-6 text-center bg-white text-[#510f4d] text-base sm:text-xl">
					<h3 className="font-bold">Number of students reached</h3>
					<p className="font-extrabold">40k</p>
				</div>
			</div>

			<div className="relative bg-cover bg-center bg-no-repeat xl:w-[400px] w-80 h-56 xl:h-[290px]">
				<div className="bg-[#a854b9]/10 absolute w-full h-full left-[0] z-10 rounded"></div>
				<img
					src="/s1.jpg"
					width="100%"
					height="100%"
					className="rounded"
					alt="what we do"
				/>
				{/*  left-16*/}
				<div className="z-20 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 px-6 py-4 text-center bg-white text-[#510f4d] text-base sm:text-xl">
					<h3 className="font-bold">
						Percentage of students admitted through us
					</h3>
					<p className="font-extrabold">95%</p>
				</div>
			</div>
		</div>
	);
};

export default Img;
