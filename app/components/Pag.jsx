"use client";

import React, { useEffect, useRef, useState } from "react";

const Pag = ({ src, text, head, no }) => {
	return (
		<div className="bg-[#4C0859] rounded-2xl text-white p-9 lg:p-24 sticky top-0 h-screen overflow-hidden">
			<div className="flex flex-col lg:flex-row justify-between w-full">
				<div className="xs:flex lg:block items-center justify-center w-full lg:w-2/4">
					<div className="mt-10 lg:mt-6 xl:mt-12 py-1 xs:py-2 md:py-16 lg:py-1 2xl:p-12 xs:w-3/4 lg:w-full">
						<div className="relative">
							{/* #81105b  */}
							<img
								src={src}
								alt="Why-Iconic-Impact"
								className="w-[100%] p-6 sm:p-4 lg:p-6 2xl:p-8 bg-[#e9ded9] h-auto rounded-3xl"
							/>
							<div className="rounded-[100%] text-2xl sm:text-4xl md:text-5xl px-10 py-7 -top-8  -left-12  bg-[#4C0859] absolute">{no}</div>
						</div>
					</div>
				</div>
				<div className="pt-2 xs:pt-6 lg:pl-12 xl:pl-16 xl:pt-12 2xl:mt-12 lg:w-2/4">
					<div className="xl:text-base text-xs sm:text-sm">
						<h3 className="">Why Iconic Impact?</h3>
					</div>
					<div className="text-[#e9ded9] pt-8 lg:pt-12 xl:pt-20 font-bold">
						<h3 className="lg:text-5xl xl:text-6xl  text-lg pb-2 lg:pb-8">{head}</h3>
						<div className="lg:text-xl xl:text-2xl text-base">{text}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pag;
