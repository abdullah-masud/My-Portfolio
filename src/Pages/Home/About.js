import React from 'react';
import image2 from '../../assets/img/person2.png'
import { Link } from 'react-scroll';

const About = () => {
    return (
        <section className='section bg-secondary ' id='about'>
            <div className='container max-w-7xl mx-auto  lg:h-[70vh] flex items-center'>
                <div className='flex flex-col xl:flex-row gap-24 px-3 mt-12 lg:mt-0 lg:px-0'>
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
                                Web Developer & WordPress Developer
                            </p>
                            <hr className='mb-8 opacity-5' />
                            <p className='mb-8 text-[#878e99] text-justify'>
                                As a computer science student and junior web developer, I possess expertise in both MERN stack and WordPress development. I am skilled in HTML, CSS, JavaScript, React, NodeJs, MongoDB, and ExpressJs. I have experience in creating MERN stack projects and performing CRUD operations. Additionally, I possess skills in designing dynamic and visually-appealing websites and landing pages using WordPress, which enables me to create high-converting pages for clients. My passion for technology and ability to adapt to new skills make me eager to continue growing as a developer and contribute to the success of any team I join.
                            </p>
                        </div>
                        <Link to='contact' activeClass='active'
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className='cursor-pointer btn bg-accent hover:bg-accent-hover  transition-all duration-300 rounded-md lg:mt-4 lg:mb-0 mb-6'>
                            Contact me
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;