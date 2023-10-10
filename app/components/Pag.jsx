import Image from "next/image";
import React from "react";

const Pag = () => {
	return (
		<div className="bg-[#510f4d]/90 rounded-3xl text-white p-16">
			<div className="flex justify-between w-full">
				<div className="pt-8 w-2/4">
					<div>
						<Image
							src={"/tu11.png"}
							width={520}
							height={400}
							alt="Why-Iconic-Impact"
							className="w-[520px] bg-[#e9ded9] h-auto p-16 rounded-t-3xl"
						/>
					</div>
					<div></div>
				</div>
				<div className="pt-12 pl-12 w-2/4">
					<div className="text-xl">
						<h3>Why Iconic Impact?</h3>
					</div>
					<div className="text-[#e9ded9] pt-36 font-bold">
						<h3 className="text-8xl pb-8">Our Tutors</h3>
						<p className="text-2xl">
							Our tutors are basically medical and engineering students from
							prestigious universities all across Nigeria. Their dexterity in
							tutoring as well as their intelligence knows no bounds at all. You
							can be so sure you're in safe hands.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pag;
