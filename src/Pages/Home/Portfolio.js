import React from 'react';
import Projects from './Projects';

const Portfolio = () => {
    return (
        <section id='portfolio' className=' bg-primary min-h-[1200px] flex flex-col justify-center '>
            <div className='container max-w-7xl mx-auto  lg:pb-0 pb-12'>
                <div className='flex flex-col items-center text-center '>
                    <h2 className='before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block mb-[-10px] text-white text-4xl font-semibold font-primary'>
                        My latest Projects
                    </h2>
                </div>
                <Projects />
            </div>
        </section>
    );
};

export default Portfolio;