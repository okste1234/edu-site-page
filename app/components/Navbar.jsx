import Image from "next/image";
import React from "react";

const Navbar = () => {
	return (
		<div className="lg:px-5 mx-3 lg:my-3 pb-3 2xl:pb-5">
			<div className="bg-base-100 mt-1 w-full flex lg:justify-between">
				<div className="flex lg:justify-start justify-between w-full lg:w-1/3 flex-shrink-0">
					<div className="dropdown justify-start">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						{/* text-black */}
						{/* bg-[#fdc000] */}
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 text-lg font-bold shadow bg-[#fdc000] rounded-box w-52 text-black"
						>
							<li>
								<a>Home</a>
							</li>
							<li>
								<a>About</a>
							</li>
							<li>
								<a>Classes</a>
							</li>
							<li>
								<a>Blog</a>
							</li>
							<li>
								<a>Testimonial</a>
							</li>
							<li>
								<a>FAQ</a>
							</li>
						</ul>
					</div>
					<a className="text-xl flex lg:items-center font-bold justify-end">
						<Image
							src={"/logo1.png"}
							height={50}
							width={100}
							alt="logo"
							className="w-[50px] lg:w-[80px] h-auto"
						/>
						<span className="pt-4 lg:pt-6 text-[#81105b] text-sm lg:text-xl text-center">
							<h1>ICONIC IMPACT</h1>
						</span>
					</a>
				</div>
				<div className="hidden navbar-center mt-2 lg:flex">
					<ul className="flex px-1 font-medium text-xl justify-between">
						<li className="pt-6 px-3 xl:px-6 2xl:px-9 border-[#81105b] border-t-4">
							<p>Home</p>
						</li>
						<li className="pt-6 px-3 xl:px-6 2xl:px-9 hover:border-[#510f4d] border-[#fff] border-t-4">
							<a>About</a>
						</li>
						<li className="pt-6 px-3 xl:px-6 2xl:px-9 hover:border-[#510f4d] border-[#fff] border-t-4">
							<a>Classes</a>
						</li>
						<li className="pt-6 px-3 xl:px-6 2xl:px-9 hover:border-[#510f4d] border-[#fff] border-t-4">
							<a>Blog</a>
						</li>
						<li className="pt-6 px-3 xl:px-6 2xl:px-9 hover:border-[#510f4d] border-[#fff] border-t-4">
							<a>Testimonial</a>
						</li>
						<li className="pt-6 px-3 xl:px-6 2xl:px-9 hover:border-[#510f4d] border-[#fff] border-t-4">
							<a>FAQ</a>
						</li>
						{/* hover:border-[#510f4d] border-[#fff] border-t-4 pt-4 */}
					</ul>
				</div>
				<div className="pt-6 lg:w-1/3 hidden lg:flex justify-end">
					<a href="" className="btn bg-[#fdc000]/60">Join Now</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
