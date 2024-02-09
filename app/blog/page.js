
import Link from "next/link"

export default function Blog() {
    return (
        <div className="bg-gray-50">
            <div className="m-auto max-w-[1450px]">
                <div className="border-b border-gray-200">
                    <div className="container">
                        <nav className="flex items-center justify-between h-14">
                            <div className="flex items-center space-x-4">
                                <Link className="flex items-center space-x-2 text-2xl font-semibold" href="#">
                                    <HomeIcon className="w-5 h-5" />
                                    <span className="sr-only">Home</span>
                                </Link>
                                <nav className="hidden space-x-4 md:flex">
                                    <Link className="font-medium" href="#">
                                        Home
                                    </Link>
                                    <Link className="font-medium" href="#">
                                        Blog
                                    </Link>
                                    <Link className="font-medium" href="#">
                                        Contact
                                    </Link>
                                </nav>
                            </div>
                            <div className="hidden space-x-2 md:flex">
                                <Link className="text-sm font-medium" href="#">
                                    Getting Started
                                </Link>
                                <Link className="text-sm font-medium" href="#">
                                    Guides
                                </Link>
                                <Link className="text-sm font-medium" href="#">
                                    Components
                                </Link>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Link className="text-sm font-medium underline underline-offset-4" href="#">
                                    Sign in
                                </Link>
                                <Link className="text-sm font-medium underline underline-offset-4" href="#">
                                    Sign up
                                </Link>
                                <button size="sm" variant="ghost">
                                    Subscribe
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
                <article className="relative grid gap-4 pt-12 pb-16 lg:grid-cols-12 lg:gap-8 lg:pt-24 lg:pb-24">
                    <div className="container grid-inset-start-1 lg:col-span-8 lg:grid-inset-start-2">
                        <div className="space-y-4 lg:space-y-6">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter lg:text-5xl/none lg:leading-tighter">
                                    The Science of Color
                                </h1>
                                <p className="text-gray-500">By John Doe</p>
                            </div>
                            <div className="space-y-4 text-xl leading-relaxed lg:text-base lg:leading-loose xl:text-xl xl:leading-relaxed">
                                <p>
                                    Color is a fundamental aspect of the human experience. It shapes our perceptions, influences our
                                    emotions, and plays a crucial role in communication. But what is color, and how do we perceive it?
                                </p>
                                <p>
                                    In this article, we&apos;ll explore the science of color, delving into the physics of light, the biology of
                                    vision, and the psychology of perception. We&apos;ll learn how the human eye processes different wavelengths
                                    of light, how the brain interprets these signals, and how our perception of color is shaped by cultural
                                    and environmental factors.
                                </p>
                                <p>
                                    We&apos;ll also examine the role of color in art, design, and aesthetics, exploring how artists and designers
                                    use color to create visual impact, convey moods and emotions, and guide the viewer&apos;s attention. Along
                                    the way, we&apos;ll encounter some fascinating examples of color in nature, art, and the built environment,
                                    and we&apos;ll gain a deeper appreciation for the beauty and complexity of the world of color that surrounds
                                    us.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-4">
                        <img
                            alt="Hero"
                            className="mx-auto aspect-[4/3] rounded-lg overflow-hidden object-cover object-center"
                            height="400"
                            src="/placeholder.svg"
                            width="600"
                        />
                    </div>
                </article>
                <div className="container py-12 lg:py-16">
                    <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
                        <div className="space-y-4">
                            <Link className="font-semibold" href="#">
                                <img
                                    alt="Thumbnail"
                                    className="aspect-[2/1] rounded-lg object-cover object-center"
                                    height="200"
                                    src="/placeholder.svg"
                                    width="400"
                                />
                                <p className="mt-2.5 line-clamp-2">The Art of Typography: A Masterclass in Visual Elegance</p>
                            </Link>
                            <p className="text-sm text-gray-500">May 13, 2023</p>
                        </div>
                        <div className="space-y-4">
                            <Link className="font-semibold" href="#">
                                <img
                                    alt="Thumbnail"
                                    className="aspect-[2/1] rounded-lg object-cover object-center"
                                    height="200"
                                    src="/placeholder.svg"
                                    width="400"
                                />
                                <p className="mt-2.5 line-clamp-2">The Science of Sound: Exploring the Wonders of Acoustics</p>
                            </Link>
                            <p className="text-sm text-gray-500">April 24, 2023</p>
                        </div>
                        <div className="space-y-4">
                            <Link className="font-semibold" href="#">
                                <img
                                    alt="Thumbnail"
                                    className="aspect-[2/1] rounded-lg object-cover object-center"
                                    height="200"
                                    src="/placeholder.svg"
                                    width="400"
                                />
                                <p className="mt-2.5 line-clamp-2">The Art of Storytelling: Crafting Narratives That Captivate</p>
                            </Link>
                            <p className="text-sm text-gray-500">March 18, 2023</p>
                        </div>
                    </div>
                </div>
                <footer className="py-14 lg:py-20">
                    <div className="container flex flex-col items-center justify-center space-y-6 lg:flex-row lg:space-y-0 lg:space-x-10">
                        <div className="flex items-center space-x-2">
                            <Link className="text-2xl font-semibold" href="#">
                                Shimmer
                            </Link>
                        </div>
                        <ul className="flex items-center justify-center space-x-4 lg:order-3">
                            <li>
                                <Link className="text-sm font-medium" href="#">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className="text-sm font-medium" href="#">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link className="text-sm font-medium" href="#">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        <div className="order-2 lg:order-3">
                            <div className="flex items-center space-x-6">
                                <Link
                                    className="rounded-full border border-gray-200 w-8 h-8 flex items-center justify-center overflow-hidden dark:border-gray-800"
                                    href="#"
                                >
                                    <TwitterIcon className="w-4 h-4 text-twitter" />
                                    <span className="sr-only">Twitter</span>
                                </Link>
                                <Link
                                    className="rounded-full border border-gray-200 w-8 h-8 flex items-center justify-center overflow-hidden dark:border-gray-800"
                                    href="#"
                                >
                                    <GithubIcon className="w-4 h-4 text-github" />
                                    <span className="sr-only">GitHub</span>
                                </Link>
                            </div>
                        </div>
                        <p className="text-sm tracking-tighter lg:order-2 lg:text-right lg:w-1/3 lg:mx-auto lg:max-w-[400px]">
                            © 2023 Shimmer. All rights reserved. Blazingly fast websites by
                            <Link className="underline underline-offset-4" href="#">
                                Shimmer
                            </Link>
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

function GithubIcon(props) {
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
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
    )
}


function HomeIcon(props) {
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
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
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
