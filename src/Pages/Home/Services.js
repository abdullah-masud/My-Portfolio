import React from 'react';
import {
    FiLayout, FiSettings,
} from 'react-icons/fi';

const Services = () => {
    return (
        <section id='services' className='section bg-tertiary'>
            <div className='container max-w-7xl mx-auto lg:h-[60vh] flex flex-col justify-center px-3 lg:pb-12 pb-12'>
                <div className='flex flex-col items-center text-center'>
                    <h2 className='section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block mb-10 text-white font-primary text-4xl font-semibold lg:mt-0 mt-12'>
                        What I do for clients
                    </h2>

                </div>
                <div className='grid lg:grid-cols-2 gap-8 '>
                    <div className='bg-secondary p-6 rounded-2xl'>
                        <div className='text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-6 text-[28px]'>
                            <FiLayout />
                        </div>
                        <h4 className='text-xl font-medium mb-2 text-white'>Web Design</h4>
                        <p className='text-[#878e99] text-justify'>I am a web designer skilled in HTML, CSS, JavaScript, React Bootstrap, TailwindCss, and WordPress. My goal is to create visually-appealing and user-friendly websites that effectively communicate your message to your target audience. I am also experienced in creating responsive designs that can adapt to various devices and screen sizes.</p>
                    </div>
                    <div className='bg-secondary p-6 rounded-2xl'>
                        <div className='text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-6 text-[28px]'>
                            <FiSettings />
                        </div>
                        <h4 className='text-xl font-medium mb-2 text-white'>Web Development</h4>
                        <p className='text-[#878e99] text-justify'>I am a web developer with proficiency in front-end technologies like HTML, CSS, JavaScript, React and back-end technologies like NodeJs, MongoDB, and ExpressJs. I have experience creating full-stack projects and performing CRUD operations, and expertise in WordPress development to design dynamic and visually-appealing websites.</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Services;