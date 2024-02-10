"use client"

import React from 'react'
import { motion } from "framer-motion"


function TestimonialCard() {
    return (
        <article className='flex text-start rounded-xl space-y-6 
            flex-shrink-0 max-w-[320px] sm:max-w-[520px] bg-white cursor-pointer transition-opacity duration-200 
            overflow-hidden py-2 px-4 snap-center border-t-[#c8d7eb] border-t-4 font-medium'>
            <div div className="flex flex-col sm:flex-row justify-between bg-base-100 shadow-xl py-4 px-2" >
                <figure className='sm:w-1/2'>
                    <motion.img
                        initial={{
                            y: -100,
                            opacity: 0
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{ duration: 1.5 }}
                        className='h-fit w-full'
                        src="/img.webp" alt="Movie" />
                </figure>
                <div className="sm:w-1/2 py-2 sm:py-0 sm:px-4">
                    <h2 className="text-sm lg:text-xl font-medium">Judah Lisebon</h2>
                    <div className='text-xs md:text-sm pt-2'>The team really does a good job. I am glad we decided to work with you.
                        It is really great how efficient your company is especially with regards to the insightful Business
                        advice you give which upon implementation, we have seen changes in our organisation.
                        All of these and much more coupled amazing customer service and prompt delivery.
                    </div>
                </div>
            </div>

        </article>
    )
}

export default TestimonialCard