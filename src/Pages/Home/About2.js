import React from 'react';
import {
    FiLayout, FiSettings,
} from 'react-icons/fi';

const About2 = () => {
    return (
        <section id='services' className='section bg-tertiary py-5'>
            <div className='container max-w-7xl mx-auto lg:h-[63vh] flex flex-col justify-center px-3 lg:pb-12 pb-12'>
                <div className='flex flex-col items-center text-center'>
                    <div className='relative text-center mb-8'>
                        <h2 className='section-title before:content-about relative before:absolute before:opacity-40 before:-top-[1.5rem] before:left-1/2 before:-translate-x-1/2 before:hidden before:lg:block text-white font-primary text-4xl font-semibold lg:mt-0 mt-12'>
                            Abdulla Al Masud
                        </h2>
                        <p className='text-accent text-lg font-medium mt-[-2px]'>
                            Software Engineer & Full-Stack Developer
                        </p>
                    </div>


                </div>
                <div className='grid lg:grid-cols-2 gap-8 '>
                    <div className='bg-secondary p-6 rounded-2xl'>
                        <div className='text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-6 text-[28px]'>
                            <FiLayout />
                        </div>
                        <h4 className='text-xl font-medium mb-2 text-white'>About Me</h4>
                        <p className='text-[#878e99] text-justify'>I am Abdullah Al Masud, currently pursuing a Master of Information Technology at the University of Western Australia (UWA). My journey in technology began with a Bachelor's in Computer Science and Engineering, where I developed a strong foundation in software development and backend engineering..</p>
                    </div>
                    <div className='bg-secondary p-6 rounded-2xl '>
                        <div className='text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-6 text-[28px]'>
                            <FiSettings />
                        </div>
                        <h4 className='text-xl font-medium mb-2 text-white'>Web Development & Backend Engineering</h4>
                        <p className='text-[#878e99] text-justify'>I specialize in building full-stack web applications using React, Node.js, Express.js, and MongoDB. My experience includes creating dynamic front-end interfaces and scalable backend solutions with a focus on performance and security.

                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About2;