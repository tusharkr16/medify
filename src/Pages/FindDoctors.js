import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { FaSearch } from 'react-icons/fa'
import Card from '../Components/Card';
import img from '../assets/sensodyne_dweb.png.png'
import axios from 'axios';
import Footer from '../Components/Footer';
import img2 from "../assets/Group 1000011073.png"
import Qouestion from '../Components/Qouestion';

const FindDoctors = () => {
    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch the initial list of states
        const fetchStates = async () => {
            try {
                const response = await axios.get('https://meddata-backend.onrender.com/states');
                setStates(response.data);
            } catch (error) {
                console.error('Error fetching states:', error);
            }
        };

        fetchStates();
    }, []);

    const fetchData = async () => {
        try {
            console.log(selectedState, selectedCity);
            const response = await axios.get(`https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity.toUpperCase()}`);
            console.log(response.data); // Log response to verify data structure
            setData(response.data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };



    const handleSubmit = () => {
        // Trigger data fetching when button is clicked
        fetchData();
    };
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
                            <select
                                className="py-2 pl-10 pr-4 text-sm text-gray-900 bg-white rounded-md border border-gray-300 focus:outline-none focus:bg-white focus:border-primary-color"
                                value={selectedState}
                                onChange={(e) => setSelectedState(e.target.value)}
                            >
                                <option value="">Select State</option>
                                {states.map((state) => (
                                    <option key={state} value={state}>{state}</option>
                                ))}
                            </select>
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
                    {data.map((hospital) => (
                        <Card
                            key={hospital.ProviderID}
                            hospitalName={hospital["Hospital Name"]}
                            state={hospital.State}
                            city={hospital.City}
                        />
                    ))}

                </div>
                <div className='w-1/3  h-auto'>
                    <div className='mt-[118px] p-6'>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <Qouestion />
            </div>
            <div className='mt-16 '>
                <img src={img2} alt="" className='mx-auto w-full' />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default FindDoctors