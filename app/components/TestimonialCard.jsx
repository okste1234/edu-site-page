"use client"

import React from 'react'
import { motion } from "framer-motion"


function TestimonialCard() {
    return (
        <article className='flex flex-col rounded-xl space-y-6 
            flex-shrink-0 w-fit xs:w-[330px] bg-white cursor-pointer transition-opacity duration-200 
            overflow-hidden py-6 px-4 items-center snap-center border-t-[#c8d7eb] border-t-4 font-medium'>
            {/* #0057a9 */}
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
                src={"/img.webp"}
                alt="Picture of the author"
                className='w-32 h-32 rounded-full object-center object-cover'
            />

            <div className='text-sm lg:text-lg'>
                <p>“The team really does a good job. I’m glad we decided to work with you.
                    It’s really great how efficient your company is especially with regards to the insightful Business
                    advice you give which upon implementation, we have seen changes in our organisation.
                    All of these and much more coupled amazing customer service and prompt delivery.”
                </p>
            </div>

            <ul className='list-disc text-start text-lg lg:text-xl'>
                <li className='text-[#a854b9]'>Judah Lisebon</li>
                <li>Medicine & Surgery, OAU</li>
            </ul>

        </article>
    )
}

export default TestimonialCard