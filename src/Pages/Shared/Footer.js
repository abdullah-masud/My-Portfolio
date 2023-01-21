import React from 'react';
//  icons
import {
    FiGithub, FiLinkedin,
} from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className='bg-tertiary py-12'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-evenly '>
                    <div className='flex space-x-6 items-center justify-center '>

                        <a className='text-accent text-base' target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/abdullah-al-masud-6557041a1/' >
                            <FiLinkedin />
                        </a>
                        <a className='text-accent text-base' target="_blank" rel='noreferrer' href='https://github.com/abdullah-masud' >
                            <FiGithub />
                        </a>

                    </div>
                    <p className='text-paragraph opacity-80 text-[15px]'>
                        &copy; 2022 Abdullah Al Masud. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;