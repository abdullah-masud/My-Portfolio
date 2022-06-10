import React from 'react';
import image2 from '../../assets/img/person2.png'
import { Link } from 'react-scroll';

const About = () => {
    return (
        <section className='section bg-secondary ' id='about'>
            <div className='container max-w-7xl mx-auto  lg:h-[70vh] flex items-center'>
                <div className='flex flex-col xl:flex-row gap-24'>
                    <img
                        className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
                        src={image2}
                        alt=''
                    />
                    <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
                        <div className='flex flex-col'>
                            <h2 className='text-white font-primary text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                                Abdullah Al Masud
                            </h2>
                            <p className='mb-4 text-accent'>
                                Junior Web Developer
                            </p>
                            <hr className='mb-8 opacity-5' />
                            <p className='mb-8 text-[#878e99]'>
                                Current CSE student and Junior Web Developer. I have developed proficient skills in HTML, CSS, JavaScript, and React for Front-End Web Development, as well as NodeJs, MongoDb, and ExpressJs for Back-End Web Development.I created multiple MERN stack project in which I wrote client and server side code and performed crud operations. Besides web development, I am adept in other programming languages like C, Java and Python.
                            </p>
                        </div>
                        <Link to='contact' activeClass='active'
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className='cursor-pointer btn bg-accent hover:bg-accent-hover  transition-all duration-300 rounded-md lg:mt-6 lg:mb-0 mb-6'>
                            Contact me
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;