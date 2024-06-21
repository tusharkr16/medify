import React from 'react';
import img from "../assets/div.elementor-widget-wrap.png";

const Families = () => {
    return (
        <div className='w-full p-4 h-[484px] bg-tertiary-color'>
            <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start'>
                <div className='flex flex-col justify-center text-left lg:w-1/3 mt-9'>
                    <p className='text-primary-color py-3 font-semibold'>CARING FOR THE HEALTH OF YOUR FAMILY</p>
                    <h1 className='text-quaternary-color text-4xl font-semibold pb-3'>Our Families</h1>
                    <p className='text-biny-color text-sm leading-7 pt-5'>
                        We will work with you to develop individually care plans<br />
                        including management of chronic diseases. If we cannot<br />
                        assist you we will provide referral or advice for the type of practitioner<br />
                        you require. We treat all kinds of illness and will assist you forward<br />
                        with confidence.
                    </p>
                </div>
                <div className='w-96 h-96 mt-8 lg:mt-0'>
                    <img src={img} alt="" className='w-full h-auto' />
                </div>
            </div>
        </div>
    );
}

export default Families;
