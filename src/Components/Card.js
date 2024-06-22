// Card.jsx
import React from 'react';
import { SiTicktick } from "react-icons/si";
import img from "../assets/div.u-pos-has.png";
import { BiSolidLike } from "react-icons/bi";

const Card = () => {
    return (
        <div className='border border-black w-full mt-28 p-5'>
            <h1 className='font-semibold text-xl'>{`15 medical centers available in Alaska`}</h1>
            <p className='flex text-sm gap-2 px-2 py-4'>
                <SiTicktick className='ml-3' />
                Book appointment with minimum wait time and first priority
            </p>
            <div>
                <div>
                    <div className='flex p-4 bg-white shadow-lg mb-5'>
                        <div>
                            <img src={img} alt="" />
                        </div>
                        <div className='ml-5 p-5 flex-grow'>
                            <h2 className='text-primary-color font-semibold text-xl'>Fortis Hospital Richmond Road</h2>
                            <p className='font-semibold mt-5'>Banglore, Karnataka</p>
                            <p>Smillesence center for dentistry +1 <br /> more</p>
                            <p>
                                <span className='text-green-600 font-semibold text-md'>Free</span>
                                <del>₹500</del> Consultation fees at clinic
                            </p>
                            <button className='bg-green-600 px-2 py-1 text-md mt-3 rounded-md'>
                                <BiSolidLike />
                            </button>
                        </div>
                        <div className='p-5 flex flex-col justify-end'>
                            <p className='text-green-600 font-semibold text-center mb-2'>Available Today</p>
                            <button className='bg-primary-color text-white px-4 rounded py-3'>
                                Book FREE Center Visit
                            </button>
                        </div>
                    </div>
                    <div className='flex p-4 bg-white shadow-lg'>
                        <div>
                            <img src={img} alt="" />
                        </div>
                        <div className='ml-5 p-5 flex-grow'>
                            <h2 className='text-primary-color font-semibold text-xl'>Fortis Hospital Richmond Road</h2>
                            <p className='font-semibold mt-5'>Banglore, Karnataka</p>
                            <p>Smillesence center for dentistry +1 <br /> more</p>
                            <p>
                                <span className='text-green-600 font-semibold text-md'>Free</span>
                                <del>₹500</del> Consultation fees at clinic
                            </p>
                            <button className='bg-green-600 px-2 py-1 text-md mt-3 rounded-md'>
                                <BiSolidLike />
                            </button>
                        </div>
                        <div className='p-5 flex flex-col justify-end'>
                            <p className='text-green-600 font-semibold text-center mb-2'>Available Today</p>
                            <button className='bg-primary-color text-white px-4 rounded py-3'>
                                Book FREE Center Visit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
