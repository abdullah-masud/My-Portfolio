import React from 'react';
import { useNavigate } from 'react-router-dom';

const Project = ({ project }) => {
    const navigate = useNavigate();
    const navigateToProjectDetails = id => {
        navigate(`/projectDetails/${id}`)
    }

    return (
        <div key={project.id} className='flex flex-col items-center text-center lg:mt-10 '>
            <div className='mb-8'>
                <img className='rounded-2xl' src={project.image1} alt='' />
            </div>
            <h3 className='text-2xl font-semibold capitalize font-primary text-white text-'>{project.name}</h3>

            <p className='text-[#878e99] max-w-md my-2'>
                {project.description}
            </p>

            <div className='flex gap-3 mb-3'>
                <a className='text-accent hover:text-white cursor-pointer' href={project.liveSiteHref} target="_blank" rel='noreferrer'>
                    Live Website
                </a>
                {
                    project.githubClientHref && <a className='text-accent hover:text-white cursor-pointer' href={project.githubClientHref} target="_blank" rel='noreferrer'>
                        Github Client
                    </a>
                }
                {
                    project.githubServerHref && <a className='text-accent hover:text-white cursor-pointer' href={project.githubServerHref} target="_blank" rel='noreferrer'>
                        Github Server
                    </a>
                }
            </div>
            {
                project.category === 'mern' && <button
                    onClick={() => navigateToProjectDetails(project.id)}
                    class="btn btn-sm bg-accent hover:bg-accent-hover"
                >Details</button>
            }


        </div>
    );
};

export default Project;