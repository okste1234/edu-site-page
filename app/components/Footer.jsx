
import Link from "next/link"


export default function Component() {
	return (
		<footer className="max-w-[1450px] py-6 md:py-12 lg:py-16 m-auto">
			<div className="container grid md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr] gap-6 px-4 md:px-6">
				<div className="flex flex-col justify-between space-y-8 text-center md:text-left">
					<div className="flex flex-col md:space-y-6">
						<Link
							className="font-semibold text-base hover:underline hover:scale-105 transition-transform peer"
							href="#"
						>
							Home
						</Link>
						<Link
							className="font-semibold text-base hover:underline hover:scale-105 transition-transform peer"
							href="#"
						>
							Courses
						</Link>
						<Link
							className="font-semibold text-base hover:underline hover:scale-105 transition-transform peer"
							href="#"
						>
							About Us
						</Link>
						<Link
							className="font-semibold text-base hover:underline hover:scale-105 transition-transform peer"
							href="#"
						>
							Contact
						</Link>
					</div>
					<div className="flex items-center justify-center md:justify-start space-x-4 text-sm peer">
						<Link className="peer" href="#">
							<FacebookIcon className="w-4 h-4 fill-current" />
							<span className="sr-only">Facebook</span>
						</Link>
						<Link className="peer" href="#">
							<TwitterIcon className="w-4 h-4 fill-current" />
							<span className="sr-only">Twitter</span>
						</Link>
						<Link className="peer" href="#">
							<InstagramIcon className="w-4 h-4 fill-current" />
							<span className="sr-only">Instagram</span>
						</Link>
						<Link className="peer" href="#">
							<LinkedinIcon className="w-4 h-4 fill-current" />
							<span className="sr-only">LinkedIn</span>
						</Link>
					</div>
				</div>
				<div className="flex flex-col justify-between space-y-4 text-center md:text-right">
					<div className="flex flex-col gap-1 text-sm">
						<p className="text-gray-700 peer">123 College St, Springfield, IL, 62701</p>
						<p className="text-gray-700 peer">Call us: (123) 456-7890</p>
						<p className="text-gray-700 peer">Email: info@example.com</p>
					</div>
					<div className="grid gap-2">
						<form className="flex space-x-4">
							<input className="max-w-sm flex-1 text-sm outline-1 px-2" placeholder="Enter your email" type="email" />
							<button className="text-sm btn bg-[#fdc000]" type="submit">
								Subscribe
							</button>
						</form>
					</div>
					<div className="flex items-center justify-center md:justify-end space-x-2 text-xs">
						<div className="border-t w-1/3 peer" />
						<div className="text-gray-500 peer">© 2023 Iconic Impacts</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

function FacebookIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
		</svg>
	)
}


function InstagramIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
			<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
			<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
		</svg>
	)
}


function LinkedinIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
			<rect width="4" height="12" x="2" y="9" />
			<circle cx="4" cy="4" r="2" />
		</svg>
	)
}


function TwitterIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
		</svg>
	)
}
