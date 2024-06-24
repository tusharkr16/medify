import React, { useState, useRef } from 'react';
import { SiTicktick } from "react-icons/si";
import img from "../assets/div.u-pos-has.png";
import { BiSolidLike } from "react-icons/bi";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import Dio from '../Pages/Dio';

const Card = ({ hospitalName, city, state }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=' w-full p-5'>
            <div>
                <div className='flex bg-white shadow-lg'>
                    <div>
                        <img src={img} alt="Hospital" />
                    </div>
                    <div className='ml-5 p-5 flex-grow'>
                        <h2 className='text-primary-color font-semibold text-xl'>{hospitalName}</h2>
                        <p className='font-semibold mt-5'>{city}, {state}</p>
                        <p>Smilesence center for dentistry +1 more</p>
                        <p>
                            <span className='text-green-600 font-semibold text-md'>Free</span>
                            <del>₹500</del> Consultation fees at clinic
                        </p>
                        <button className='bg-green-600 px-2 py-1 text-md mt-3 rounded-md flex space-x-1'>
                            <BiSolidLike />
                        </button>
                    </div>
                    <div className='p-5 flex flex-col justify-end'>
                        <p className='text-green-600 font-semibold text-center mb-2'>Available Today</p>
                        <button className='bg-primary-color text-white px-4 rounded py-3' onClick={toggleAccordion}>
                            Book FREE Center Visit
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="mt-3 bg-white p-4 rounded-md">
                        <Dio />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;
