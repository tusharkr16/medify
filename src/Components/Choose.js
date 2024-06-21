import React from 'react'
import { FaSearch } from "react-icons/fa";
import Hospital from "../assets/Hospital.png";
import DrugStore from "../assets/Drugstore.png";
import Doctor from "../assets/Doctor.png";
import Capsule from "../assets/Capsule.png";
import Ambulance from "../assets/Ambulance.png"
import Banner from './Banner';


const Choose = () => {
    return (
        <div className='w-full h-72 px-10   z-10 flex flex-col justify-center items-center bg-tertiary-color '>
            <div className='flex space-x-32 mt-7'>
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
                        <button className='bg-primary-color text-white px-4 py-2 rounded'>My Bookings</button>
                    </div>
                </div>
            </div>
            <div className='mt-12 text-center mb-5'>

                <p className='text-quaternary-color text-xl'>You may be looking for</p>
                <div className='mt-7 flex space-x-32 cursor-pointer '>
                    <Banner heading="Doctor" imgSrc={Doctor} />
                    <Banner heading="Labs" imgSrc={Capsule} />
                    <Banner heading="Hospitals" imgSrc={Hospital} />
                    <Banner heading="Medical Store" imgSrc={DrugStore} className="border-2 border-primary-color  p-4" />
                    <Banner heading="Ambulance" imgSrc={Ambulance} />
                </div>
            </div>


        </div >
    )
}

export default Choose