import React from 'react'
import Banner from './Banner'
import Doctor from '../assets/Doctor.png'
import Drug from "../assets/Drugstore (1).png"
import stetoscope from "../assets/Stethoscope.png"
import cardiology from "../assets/Heart Rate Monitor.png"
import xray from "../assets/X-Ray.png"
import immune from "../assets/Immune.png"
import bloodreport from "../assets/Blood Sample.png"
// import mri from "../assets/r"



const Specialisation = () => {
    return (
        <div className='w-full bg-tertiary-color p-4'>
            <h1 className='text-quaternary-color text-4xl font-semibold text-center p-9'>Find By Specialisation</h1>
            <div className='flex space-x-9 justify-center'>
                <div className=' bg-white rounded shadow-sm'>
                    <img src={Drug} alt="" className='px-9 m-5' />
                    <p className='text-center text-poly-colors'>Dentistry</p>
                </div>
                <div className=' bg-white rounded shadow-sm'>
                    <img src={stetoscope} alt="" className='px-9 m-3' />
                    <p className='text-center text-poly-colors'>Primary care</p>
                </div>
                <div className=' bg-white rounded shadow-sm'>
                    <img src={cardiology} alt="" className='px-9 m-3' />
                    <p className='text-center text-poly-colors'>Cardiology</p>
                </div>
                <div className=' bg-white rounded shadow-sm'>
                    <img src={cardiology} alt="" className='px-9 m-3' />
                    <p className='text-center text-poly-colors'>MRI Resonanace</p>
                </div>
            </div>
            <div className='flex space-x-9 justify-center mt-4'>
                <div className=' bg-white rounded shadow-sm'>
                    <img src={immune} alt="" className='px-9 m-4 ' />
                    <p className='text-center text-poly-colors'>Piscologist</p>
                </div>
                <div className=' bg-white rounded shadow-sm'>
                    <img src={bloodreport} alt="" className='px-9 m-4' />
                    <p className='text-center text-poly-colors'>Blood Test</p>
                </div>
                <div className=' bg-white rounded shadow-sm'>
                    <img src={Drug} alt="" className='px-9 m-4' />
                    <p className='text-center text-poly-colors'>laboratory</p>
                </div>
                <div className=' bg-white rounded shadow-sm'>
                    <img src={xray} alt="" className='px-9 m-4' />
                    <p className='text-center text-poly-colors'>X-Ray</p>
                </div>
            </div>
            <div className='flex justify-center mt-12 mb-8'>
                <button className='bg-primary-color text-white px-7 py-2 rounded '>View All</button>
            </div>

        </div>
    )
}

export default Specialisation