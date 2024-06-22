import React from 'react'
import logo from "../assets/logo.png"
import { FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const iconStyle = {
    borderRadius: '50%',
    backgroundColor: '#ffffff',
    padding: '8px',
    color: '#3182ce', // Adjust the color as needed
    fontSize: '1.9rem', // Adjust the size of the icons
};

const Footer = () => {
    return (
        <div className='bg-quaternary-color'>
            <footer class=" rounded-lg shadow bg-quaternary-color m-4">
                <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src={logo} class="h-8" alt="Flowbite Logo" />
                            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Medify</span>
                        </a>

                        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" class="hover:underline me-4 md:me-6">About</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex py-6 mt-10 space-x-5 '>
                        <FaTwitter style={iconStyle} className='' />
                        <FaInstagram style={iconStyle} />
                        <FaYoutube style={iconStyle} />
                        <FaPinterest style={iconStyle} />
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
                </div>
            </footer>


        </div>
    )
}

export default Footer