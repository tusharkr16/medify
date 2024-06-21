import React from 'react'
import img from "../assets/div.st4-blog-single.png"

const News = () => {
    return (
        <div className='w-full p-4 h-auto'>
            <div>
                <div className='p-9'>
                    <p className='text-primary-color text-center font-semibold'>Blog & News</p>
                    <h1 className='text-quaternary-color text-center font-semibold text-4xl py-3'>Read Our Latest News</h1>
                </div>
                <div className='flex justify-center px-9'>
                    <img src={img} alt="" className='' />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default News