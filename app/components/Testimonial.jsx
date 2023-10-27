import TestimonialCard from './TestimonialCard'

const Testimonial = () => {
    return (
        <div className='max-w-7xl m-auto h-screen text-center px-10 items-center z-0'>
            <h3 className='text-[#a854b9] tracking-[4px] pb-6 font-medium text-3xl'>What Students are Saying</h3>
            <div className='flex overflow-x-scroll space-x-5 snap-x md:p-5 scrollbar-thin scrollbar-track-[#4C0859]/10 scrollbar-thumb-[#fdc000]/90'>
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
            </div>
        </div>
    )
}

export default Testimonial