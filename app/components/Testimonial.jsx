"use client"

import TestimonialCard from './TestimonialCard'
import { motion } from 'framer-motion'


const Testimonial = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='px-2 py-6 md:py-12 lg:py-16 max-w-[1450px]'
        >
            <h3 className='text-[#a854b9] pb-4 font-semibold text-center text-xl sm:text-3xl'>What Students are Saying</h3>
            <div className='flex overflow-x-scroll space-x-5 md:space-x-10 snap-x md:p-5 scrollbar-thin scrollbar-track-[#4C0859]/10 scrollbar-thumb-[#fdc000]/90'>
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
            </div>
        </motion.div>
    )
}

export default Testimonial