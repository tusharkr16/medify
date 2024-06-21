import React from 'react'
import img1 from "../assets/Group 1000011062.png"
import { MdVerified } from "react-icons/md";

const Caring = () => {
    return (
        <div className='w-full bg-tertiary-color p-4 h-auto'>
            <div className='flex justify-center px-20 py-11'>
                <div className=''>
                    <img src={img1} alt="" />
                </div>
                <div className=' flex-1 mt-8 p-10 ms-10'>
                    <p className='text-primary-color font-semibold mt-9'>HELPING PATIENT FROM AROUND THE GLOBE</p>
                    <h1 className='text-quaternary-color text-5xl font-semibold py-4'>Patient <span className='text-primary-color'>Caring</span></h1>
                    <p className='text-biny-color py-3'>Our goal is to deliver quality of care in a couteous , respectful and compassioniate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.</p>
                    <div className='mt-5 space-y-5'>
                        <div className='flex items-center gap-2'>
                            <MdVerified className='text-primary-color text-2xl' />
                            <p className='text-quaternary-color font-semibold py-2'>Stay Updated About Your Health</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <MdVerified className='text-primary-color text-2xl' />
                            <p className='text-quaternary-color font-semibold py-2'>Check Your Result Online</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <MdVerified className='text-primary-color text-2xl' />
                            <p className='text-quaternary-color font-semibold py-2'>Manage Your Appointments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Caring