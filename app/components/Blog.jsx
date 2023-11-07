import Image from 'next/image'
import React from 'react'
import Blogs from './Blogs'

const Blog = () => {
    return (
        <div className='my-16 text-center'>
            <h3>FROM OUR BLOG</h3>
            <h4>More edu insight from Iconic Impacts</h4>

            <div className='sm:flex w-full gap-x-6'>
                <div>
                    <Blogs />
                </div>
                <div className='grid grid-cols-2'>
                    <p>etwetr</p>
                    <p>etwetr</p>
                    <p>etwetr</p>
                    <p>etwetr</p>
                    <p>etwetr</p>
                </div>
            </div>
        </div>
    )
}

export default Blog