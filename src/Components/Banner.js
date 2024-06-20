import React from 'react'

const Banner = ({ heading, imgSrc, className }) => {
    return (
        <div className={`flex flex-col items-center ${className}`}>
            <div>
                {imgSrc && <img src={imgSrc} alt={heading} className='w-16 h-16 mb-2' />}
            </div>
            <div>
                {heading}
            </div>

        </div>
    )
}

export default Banner