import React, { useState, useRef, useEffect } from 'react';
import { SiTicktick } from "react-icons/si";
import img from "../assets/div.u-pos-has.png";
import { BiSolidLike } from "react-icons/bi";
import { Swiper, SwiperSlide } from 'swiper/react';
import Dio from '../Pages/Dio';
import { FaSearch } from 'react-icons/fa'
import img2 from "../assets/sensodyne_dweb.png.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import Navbar from './Navbar';
import Footer from './Footer';
import Card from './Card';
import Qouestion from './Qouestion';
import CardB from './CardB';

const Booking = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [data, setData] = useState([]);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    const handleSubmit = () => {

    };

    useEffect(() => {
        // Retrieve the array from localStorage
        const storedData = JSON.parse(localStorage.getItem('slotData'));

        // Ensure storedData is an array, if not, initialize it as an empty array
        if (Array.isArray(storedData)) {
            setData(storedData);
        } else {
            setData([]);
        }
    }, []);

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
                <div className='w-full h-16 bg-primary-color rounded-b-xl'>
                    <h3 className='text-4xl font-semibold text-white ml-5 pt-2'>My Bookings</h3>
                </div>
                <div className='bg-white w-[896px] left-[300px]  absolute top-40 rounded-xl shadow-xl'>
                    <div className='flex space-x-32  p-7'>
                        <div className="relative text-gray-600 focus-within:text-gray-400">

                        </div>
                        <div className='flex space-x-10'>
                            <div className="relative text-gray-600 focus-within:text-gray-400">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <FaSearch />
                                </span>
                                <input
                                    className="py-2 pl-10 pr-4 text-sm text-gray-900 bg-white rounded-md border border-gray-300 focus:outline-none focus:bg-white focus:border-primary-color"
                                    value={selectedCity}
                                    onChange={(e) => setSelectedCity(e.target.value.toUpperCase())}
                                />
                            </div>
                            <div>
                                <button className='bg-primary-color text-white px-8 py-2 rounded-lg' onClick={() => handleSubmit()}>My Bookings</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex bg-tertiary-color h-auto px-32'>
                <div className='w-2/3  h-auto  mt-28'>
                    {data.map((hospital, index) => (
                        <CardB
                            key={index}
                            hospitalName={hospital.hospitalName}
                            state={hospital.state}
                            city={hospital.city}
                            slot={hospital.slot}
                            date={hospital.activeLabel}
                        />
                    ))}

                </div>
                <div className='w-1/3  h-auto'>
                    <div className='mt-[118px] p-6'>
                        <img src={img2} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <Qouestion />
            </div>
            <div>
                <Footer />
            </div>

        </>
    )
}

export default Booking