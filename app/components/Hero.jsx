import Image from "next/image";
import React from "react";

const Hero = () => {
	return (
		// <div className="w-full flex flex-shrink-0 relative bg-cover bg-center bg-no-repeat h-[670px]">
		// 	<Image
		// 		src="/1.webp"
		// 		// src="/2.jpg"
		// 		// src="/3.jpg"
		// 		layout="fill"
		// 		objectFit="cover"
		// 		quality={100}
		// 		alt="hero"
		// 		className="-z-10 absolute"
		// 	/>
		// 	<div className="bg-[#510f4d]/60 w-full"></div>
		// </div>

		<div className="carousel w-full h-[620px] flex flex-shrink-0 relative bg-cover bg-center bg-no-repeat group">
			<div id="slide1" className="carousel-item w-full">
				<div className="bg-[#81105b]/40  w-full"></div>
				{/* [#510f4d]/60 */}
				<Image
					src="/1.webp"
					// src="/2.jpg"
					// src="/3.jpg"
					layout="fill"
					objectFit="cover"
					quality={100}
					alt="hero"
					className="-z-10 absolute"
				/>
				<div className="group-hover:visible invisible absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide2" className="btn btn-circle">
						❯
					</a>
				</div>
			</div>
			<div id="slide2" className="carousel-item relative w-full">
				<div className="bg-[#81105b]/60 w-full"></div>
				<Image
					src="/2.jpg"
					// src="/3.jpg"
					layout="fill"
					objectFit="cover"
					quality={100}
					alt="hero"
					className="-z-10 absolute"
				/>
				<div className="group-hover:visible invisible absolute flex justify-start transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide1" className="btn btn-circle">
						❮
					</a>
				</div>
			</div>
		</div>
	);
};
export default Hero;
