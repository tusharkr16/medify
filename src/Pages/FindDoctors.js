import React from 'react'
import Navbar from '../Components/Navbar'
import { FaSearch } from 'react-icons/fa'
import Card from '../Components/Card';
import img from '../assets/sensodyne_dweb.png.png'

const FindDoctors = () => {
    return (
        <>
            <div className='bg-secondary-color relative  h-[50px'>
                <div className='bg-primary-color text-center'>
                    <p className='text-tertiary-color p-2 leading-relaxed'>
                        The health and wellbeing of our patients and health care team will always be our priority, so we follow the best practices for cleanliness.
                    </p>
                </div>
                <div className='container mx-auto px-9  '>
                    <div className='px-4 py-8'>
                        <Navbar />
                    </div>
                </div>
                <div className='w-full h-10 bg-primary-color rounded-b-xl'>

                </div>
                <div className='bg-white w-[896px] left-[300px]  absolute top-40 rounded-xl shadow-xl'>
                    <div className='flex space-x-32  p-7'>
                        <div className="relative text-gray-600 focus-within:text-gray-400">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <FaSearch />
                            </span>
                            <input
                                type="search"
                                className="py-2 pl-10 pr-4 text-sm text-gray-900 bg-white rounded-md border border-gray-300 focus:outline-none focus:bg-white focus:border-primary-color"
                                placeholder="State"
                                autoComplete="off"
                            />
                        </div>
                        <div className='flex space-x-10'>
                            <div className="relative text-gray-600 focus-within:text-gray-400">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <FaSearch />
                                </span>
                                <input
                                    type="search"
                                    className="py-2 pl-10 pr-4 text-sm text-gray-900 bg-white rounded-md border border-gray-300 focus:outline-none focus:bg-white focus:border-primary-color"
                                    placeholder="Search..."
                                    autoComplete="off"
                                />
                            </div>
                            <div>
                                <button className='bg-primary-color text-white px-8 py-2 rounded-lg'>My Bookings</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex bg-tertiary-color h-[800px] px-32 border'>
                <div className='w-2/3 h-auto '>
                    <Card />
                </div>
                <div className='w-1/3  h-auto'>
                    <div className='mt-[118px] p-6'>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FindDoctors