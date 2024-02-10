import React from 'react'

const Faq = () => {

    return (
        <div className='max-w-[1450px] py-6 md:py-12 lg:py-16 m-auto px-6'>
            <h3 className='text-[#de3bff] tracking-wide md:tracking-[12px] pb-6 lg:pb-8 text-xl font-bold sm:text-3xl'>Find answers to your questions</h3>
            <div className="collapse collapse-plus bg-base-200 px-2">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 px-2">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 px-2">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>

            <div className="collapse collapse-plus bg-base-200 px-2">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
        </div>
    )
}

export default Faq