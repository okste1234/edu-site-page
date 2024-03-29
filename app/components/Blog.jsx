import Link from "next/link"

export default function Blog() {
    return (
        <section className="max-w-[1450px] sm:py-16 lg:py:20 py-12 px-6 m-auto">
            <div className="m-auto">
                <div className="flex flex-col gap-6 md:gap-8 lg:gap-12">
                    <div className="space-y-2 text-center">
                        <h2 className="text-xl lg:pt-2 text-center font-semibold tracking-tighter sm:text-3xl">Latest From Our Blog</h2>
                        <p className="text-gray-500 mb-2">More insights from iconic impacts.</p>
                    </div>
                    <div className="grid max-w-sm gap-6 mx-auto sm:max-w-4xl lg:max-w-full lg:grid-cols-2 xl:gap-8">
                        <div className="flex flex-col gap-4">
                            <Link className="font-semibold text-center" href="/blog">
                                <img
                                    alt="Image"
                                    className="aspect-video rounded-lg overflow-hidden object-cover object-center"
                                    height="350"
                                    src="/3.jpg"
                                    width="600"
                                />
                                <span className="sr-only">Read more about Introducing Vercel</span>
                            </Link>
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    Introducing Vercel for
                                    <wbr />
                                    <br />
                                    <span className="line-through">VS Code</span>
                                </h3>
                                <p className="text-sm text-gray-600">
                                    We are excited to announce the launch of Vercel for VS Code, a new extension that enables frontend
                                    developers to build, preview, and deploy their web applications directly from within the editor.
                                </p>
                            </div>
                            <Link
                                className="inline-flex h-8 items-center rounded-lg text-sm font-medium underline hover:text-gray-900"
                                href="/blog"
                            >
                                Read more
                                <span className="sr-only">about Introducing Vercel</span>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Link className="font-semibold" href="/blog">
                                <img
                                    alt="Image"
                                    className="aspect-video rounded-lg overflow-hidden object-cover object-center"
                                    height="350"
                                    src="/logo.png"
                                    width="600"
                                />
                                <span className="sr-only">Read more about Introducing Vercel</span>
                            </Link>
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">The Future of Jamstack</h3>
                                <p className="text-sm text-gray-600">
                                    Today, we are excited to unveil a major leap forward for the Jamstack ecosystem with the launch of
                                    Vercel Edge Network, a next-generation platform that brings the power of edge computing to every
                                    project.
                                </p>
                            </div>
                            <Link
                                className="inline-flex h-8 items-center rounded-lg text-sm font-medium underline hover:text-gray-900 dark:hover:text-gray-50"
                                href="/blog"
                            >
                                Read more
                                <span className="sr-only">about Introducing Vercel</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

