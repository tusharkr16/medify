import React from 'react';
import Navbar from './Navbar';
import hero from '../assets/hero_image.png';
import Choose from './Choose';
import Carousel from './Carousel';

const HeroSection = () => {
    return (
        <div className='bg-secondary-color relative border h-[50px]'>
            <div className='bg-primary-color text-center'>
                <p className='text-tertiary-color p-2 leading-relaxed'>
                    The health and wellbeing of our patients and health care team will always be our priority, so we follow the best practices for cleanliness.
                </p>
            </div>
            <div className='container mx-auto px-9 '>
                <div className='px-4 py-8'>
                    <Navbar />
                </div>
            </div>
            <div className='mt-8 flex space-x-5 justify-center mx-24  h-[350px]'>
                <div className='w-1/2 text-left px-9'>
                    <h4 className='text-3xl font-semibold text-quaternary-color py-5 leading-7'>Skip the travel! Find Online</h4>
                    <h1 className='text-primary-color text-5xl font-bold leading-7 mt-3'>
                        <span className='text-black'>Medical</span> Centers
                    </h1>
                    <p className='text-[#5c6169] leading-relaxed mt-7 mb-5'>
                        Connect instantly with a 24x7 specialist or choose to <br />
                        video visit a particular doctor.
                    </p>
                    <button className='bg-primary-color text-white px-4 py-2 rounded'>My Bookings</button>
                </div>
                <div className='w-1/2'>
                    <img src={hero} className=' left-[800px] w-[450px] h-[550px] absolute top-24' alt="Hero" />
                </div>
            </div>
            <div className=' w-[1190px] left-[130px] relative  border bottom-14  rounded-lg p-10 bg-tertiary-color '>
                <Choose />
            </div>
            <Carousel />
        </div>
    );
};

export default HeroSection;
