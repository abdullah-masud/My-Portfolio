import React, { useEffect, useState } from 'react';
// import { Link } from 'react-scroll';
import { Link as Link2 } from "react-router-dom";
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Navbar = () => {
    const [bg, setBg] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 50 ? setBg(true) : setBg(false);
        });
    });

    const menuItems = <>
        <li className='text-white hover:text-accent cursor-pointer font-semibold text-sm'><Link
            to='home'
            activeClass='active'
            smooth={true}
            duration={500}
            offset={-70}
            className='transition-all duration-300'
        >Home</Link></li>
        <li className='text-white hover:text-accent cursor-pointer font-semibold text-sm'><Link
            to='about'
            activeClass='active'

            smooth={true}
            duration={500}
            offset={-70}
            className='transition-all duration-3000'
        >About</Link></li>
        <li className='text-white hover:text-accent cursor-pointer font-semibold text-sm'><Link
            to='portfolio'
            activeClass='active'

            smooth={true}
            duration={500}
            offset={-70}
            className='transition-all duration-300'
        >Portfolio</Link></li>
        <li className='text-white hover:text-accent cursor-pointer font-semibold text-sm'><Link
            to='services'
            activeClass='active'
            smooth={true}
            duration={500}
            offset={-70}
            className='transition-all duration-300'
        >Services</Link></li>
        <li className='text-white hover:text-accent cursor-pointer font-semibold text-sm'><Link
            to='contact'
            activeClass='active'
            smooth={true}
            duration={500}
            offset={-70}
            className='transition-all duration-300'
        >Contact</Link></li>
        {/* <li className='text-white hover:text-accent cursor-pointer font-semibold text-sm'><Link2
            to='/blogs'
            activeClass='active'
            smooth={true}
            duration={500}
            offset={-70}
            className='transition-all duration-300'
        >Blogs</Link2></li> */}

    </>

    return (
        <header className={`${bg ? 'bg-[#131419] h-20' : 'h-24'
            } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300 `}>
            <div class="navbar max-w-7xl mx-auto text-white">
                <div class="navbar-start hidden lg:flex ">
                    <ul class="menu menu-horizontal p-0 ">
                        {menuItems}
                    </ul>
                </div>
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 bg-primary">
                            {menuItems}
                        </ul>
                    </div>
                </div>

                <div class="navbar-end">
                    <ul class="menu menu-horizontal p-0 ">
                        <li className='text-accent cursor-pointer'>
                            <a href="https://www.linkedin.com/in/abdullah-al-masud-6557041a1/"
                                target="_blank"
                                rel='noreferrer'
                            ><FiLinkedin /></a>
                        </li>
                        <li className='text-accent cursor-pointer'>
                            <a href="https://github.com/abdullah-masud"
                                target="_blank"
                                rel='noreferrer'
                            ><FiGithub /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>

    );
};

export default Navbar;