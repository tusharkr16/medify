// Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
    const navItems = [
        { link: 'Find Doctors', path: '/findDoctors' },
        { link: 'Hospitals', path: '/hospitals' },
        { link: 'Medicines', path: '/medicines' },
        { link: 'Surgeries', path: '/surgeries' },
        { link: 'Software for Provider', path: '/providers' },
        { link: 'Facilities', path: '/facilities' }
    ];

    const activeClassName = 'text-primary-color underline font-semibold py-2';

    return (
        <header className='w-full bg-transparent left-0 right-0 transition-all ease-in duration-300'>
            <nav className='container mx-auto px-6'>
                <div className='flex justify-between items-center gap-8'>

                    <div className='text-2xl font-bold text-primary-color flex items-center gap-2'>
                        <NavLink to="/">
                            <img src={logo} alt="Medify Logo" className='cursor-pointer' /> Medify
                        </NavLink>
                    </div>

                    <ul className='md:flex space-x-12'>
                        {navItems.map(({ link, path }) => (
                            <li key={path} className='text-quaternary-color text-xl cursor-pointer'>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) => isActive ? activeClassName : undefined}
                                >
                                    {link}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <NavLink to="/bookings">

                        <button className='bg-primary-color text-white px-4 py-2 rounded'>My Bookings</button>
                    </NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
