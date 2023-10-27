"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Pag = ({ src, text, head, no }) => {
	return (
		<div className="bg-[#4C0859] rounded-2xl text-white p-24 sticky top-0 h-screen container">
			<div className="flex justify-between w-full">
				<div className="py-20 w-2/4">
					<div className="relative">
						{/* #81105b  */}
						<img
							src={src}
							alt="Why-Iconic-Impact"
							className="w-[100%] p-6 bg-[#e9ded9] h-auto rounded-3xl"
						/>
						<div className="rounded-[100%] px-10 py-7 text-7xl -top-10 -left-16 bg-[#4C0859] absolute">{no}</div>
					</div>

				</div>
				<div className="pt-16 pl-12 w-2/4">
					<div className="text-xl">
						<h3>Why Iconic Impact?</h3>
					</div>
					<div className="text-[#e9ded9] pt-40 font-bold">
						<h3 className="text-6xl pb-8">{head}</h3>
						<div className="text-2xl">{text}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pag;
