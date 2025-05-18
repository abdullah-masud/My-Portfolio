import React from 'react';
import { Link } from 'react-scroll';
import image from '../../assets/img/person.png'
import resume from '../../assets/resume/Abdulla - resume.pdf'

const Hero = () => {
    return (
        <section
            id='home'
            className='lg:h-[80vh]  flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-20 lg:py-0 overflow-hidden'
        >
            <div className='container h-full max-w-7xl mx-auto mt-12 flex justify-center'>
                <div className='flex items-center h-full pt-8 '>
                    <div className='flex-1 flex flex-col items-center  lg:items-start'>
                        <p className='text-lg text-accent text-md mb-[22px] mx-auto' >
                            Hi, I'm Abdullah Al Masud! 👋
                        </p>
                        <h1 className='text-2xl  text-white font-primary leading-[44px] md:text-5xl md:leading-tight lg:text-6xl lg:leading-[1.2] font-bold md:tracking-[-2px] lg:mb-0 mb-3 lg:text-start text-center lg:px-0 px-20 '>
                            Software Engineer & Full Stack Developer


                        </h1>

                        <div className='flex gap-x-3 lg:mt-0 mt-5 lg:flex-row   mx-auto '>
                            <Link to='portfolio' activeClass='active'
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className='cursor-pointer btn lg-mb-0 mb-4 lg:mt-5 btn-md bg-accent hover:bg-accent-hover  transition-all duration-300 rounded-md'>
                                View Projects
                            </Link>
                            <a className='btn lg:mt-5 btn-md bg-accent hover:bg-accent-hover  transition-all rounded-md' href={resume} download="Resume - Masud">
                                Resume
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;