import React, { useState } from 'react';
import img from "../assets/div.u-pos-has.png";
import { BiSolidLike } from "react-icons/bi";

const CardB = ({ hospitalName, state, city, slot, date }) => {
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
                        <div className='flex justify-between'>
                            <h2 className='text-primary-color font-semibold text-xl'>{hospitalName}</h2>
                            <div className='space-x-3'>
                                <button
                                    className='p-2 rounded border border-blue-500 bg-transparent text-blue-500 whitespace-nowrap'
                                >
                                    {slot}
                                </button>
                                <button
                                    className='p-2 rounded border border-blue-500 bg-transparent text-green-600 font-semibold text-md whitespace-nowrap'
                                >
                                    {date}
                                </button>

                            </div>

                        </div>
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

                </div>
            </div>
        </div>
    );
}

export default CardB