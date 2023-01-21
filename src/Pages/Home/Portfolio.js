import React, { useState } from 'react';
import mernProjects from '../Shared/mernProjectsData'
import wordpressProjects from '../Shared/wordpressData'
import Project from './Project';

const Portfolio = () => {
    const [allProjects, setAllProjects] = useState(mernProjects);

    const switchToMernProject = () => {
        setAllProjects(mernProjects)
    }
    const switchToWordPressProject = () => {
        setAllProjects(wordpressProjects)
    }


    return (
        <section id='portfolio' className=' bg-primary min-h-[1200px] flex flex-col justify-center '>
            <div className='container max-w-7xl mx-auto  lg:pb-0 pb-12 '>
                <div className='flex flex-col items-center text-center '>
                    <h2 className='before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block mb-[-10px] text-white text-4xl font-semibold font-primary lg:my-0 my-12'>
                        My latest Projects
                    </h2>
                    <div className='lg:mt-0 mt-8'>
                        <button onClick={switchToMernProject} activeClass='active'
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className='cursor-pointer btn btn-sm bg-accent hover:bg-accent-hover  transition-all duration-300 rounded-md lg:mt-6 lg:mb-0 mb-6 mr-4'>
                            MERN
                        </button>
                        <button onClick={switchToWordPressProject} to='contact' activeClass='active'
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className='cursor-pointer btn btn-sm bg-accent hover:bg-accent-hover  transition-all duration-300 rounded-md lg:mt-6 lg:mb-0 mb-6'>
                            WordPress
                        </button>
                    </div>
                </div>
                {/* <Projects /> */}
                <section className='grid gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8 px-3 lg:mt-0 mt-2'>
                    {
                        allProjects.map(project => <Project
                            key={project.id}
                            project={project}
                        />)
                    }
                </section>
            </div>
        </section>
    );
};

export default Portfolio;