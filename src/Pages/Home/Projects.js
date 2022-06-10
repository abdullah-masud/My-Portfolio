import React from 'react';
import allProjects from '../Shared/ProjectsData'
import Project from './Project';

const Projects = () => {
    return (
        <div>
            <section className='grid gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8 px-3 lg:mt-0 mt-12'>
                {
                    allProjects.map(project => <Project
                        key={project.id}
                        project={project}
                    />)
                }
            </section>
        </div>
    );
};

export default Projects;